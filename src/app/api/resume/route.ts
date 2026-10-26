import { profile, hero, about, experience, doseItUp, wise, skillGroups, openToRoles } from '@/content/siteContent';

export const dynamic = 'force-static';

const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 50;
const MAX_CHARS = 95;

type Line = { text: string; size: number; bold: boolean; gap: number };

const sanitize = (s: string): string =>
s.
replace(/[\u2013\u2014]/g, '-').
replace(/[\u2018\u2019]/g, "'").
replace(/[\u201C\u201D]/g, '"').
replace(/\u00B7/g, '|').
replace(/[^\x20-\x7E]/g, '');

const escapePdf = (s: string): string => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const wrap = (text: string, max: number): string[] => {
  const words = sanitize(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) {
      if (cur) lines.push(cur);
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines;
};

const buildLines = (): Line[] => {
  const out: Line[] = [];
  const add = (text: string, size = 10, bold = false, gap = 14, max = MAX_CHARS) => {
    wrap(text, max).forEach((t) => out.push({ text: t, size, bold, gap }));
  };
  const heading = (text: string) => {
    out.push({ text: '', size: 6, bold: false, gap: 8 });
    out.push({ text: sanitize(text).toUpperCase(), size: 11, bold: true, gap: 16 });
  };

  add(profile.name.toUpperCase(), 20, true, 26, 50);
  add(`${profile.role} | ${profile.yearsOfExperience} years | Web & Mobile`, 11, false, 16);
  add(`${profile.location} | ${profile.email}`, 10, false, 14);
  add(`${profile.linkedin} | ${profile.github}`, 9, false, 14);

  heading('Open to');
  add(openToRoles.join(', '), 10, false, 14);

  heading('Profile');
  add(hero.intro, 10, false, 14);
  about.paragraphs.forEach((p) => add(p, 10, false, 14));

  heading('Experience');
  experience.forEach((e) => {
    add(`${e.company} - ${e.title} (${e.period})`, 11, true, 16);
    e.points.forEach((p) => add(`- ${p}`, 10, false, 13, MAX_CHARS - 2));
    if (e.tech.length) add(`Technologies: ${e.tech.join(', ')}`, 9, false, 13);
    out.push({ text: '', size: 4, bold: false, gap: 6 });
  });

  heading('Projects');
  add(`${doseItUp.name} - ${doseItUp.tagline}`, 11, true, 16);
  add(doseItUp.intro, 10, false, 13);
  add(`Features: ${doseItUp.features.join(', ')}`, 10, false, 13);
  add(`Technologies: ${doseItUp.tech.join(', ')}`, 9, false, 13);
  add(`Website: ${doseItUp.website}`, 9, false, 13);
  add(`Android app: ${doseItUp.android}`, 9, false, 13);
  out.push({ text: '', size: 4, bold: false, gap: 6 });
  add(`${wise.name} - ${wise.tagline}`, 11, true, 16);
  add(wise.description, 10, false, 13);
  add(`Technologies: ${wise.tech.join(', ')}`, 9, false, 13);

  heading('Technical Expertise');
  skillGroups.forEach((g) => add(`${g.title}: ${g.items.join(', ')}`, 10, false, 14));

  heading('Education');
  add('B.Tech, Computer Science and Engineering - IIIT Bhubaneswar (2012-2016)', 10, false, 14);

  return out;
};

const buildPdf = (): Uint8Array => {
  const lines = buildLines();
  const pages: string[] = [];
  let content = '';
  let y = PAGE_H - MARGIN;

  const flush = () => {
    pages.push(content);
    content = '';
    y = PAGE_H - MARGIN;
  };

  for (const l of lines) {
    if (y - l.gap < MARGIN) flush();
    y -= l.gap;
    if (l.text) {
      content += `BT /${l.bold ? 'F2' : 'F1'} ${l.size} Tf ${MARGIN} ${y} Td (${escapePdf(l.text)}) Tj ET\n`;
    }
  }
  if (content) pages.push(content);

  const objects: string[] = [];
  const pageCount = pages.length;
  // 1: catalog, 2: pages, 3: font regular, 4: font bold, then page/content pairs
  const kids = pages.map((_, i) => `${5 + i * 2} 0 R`).join(' ');
  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
  objects[2] = `<< /Type /Pages /Kids [${kids}] /Count ${pageCount} >>`;
  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
  pages.forEach((c, i) => {
    const pageId = 5 + i * 2;
    const contentId = pageId + 1;
    objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
    objects[contentId] = `<< /Length ${c.length} >>\nstream\n${c}endstream`;
  });

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [];
  for (let i = 1; i < objects.length; i++) {
    offsets[i] = pdf.length;
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  return new TextEncoder().encode(pdf);
};

export async function GET() {
  const body = buildPdf();
  return new Response(body as BodyInit, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${profile.resumeFileName}"`,
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
