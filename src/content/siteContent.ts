// =====================================================================
// SITE CONTENT — edit this file to update the portfolio without
// touching any component. Items marked EDITABLE PLACEHOLDER need your
// real values.
// =====================================================================

export const profile = {
  name: 'Ankita Panigrahi',
  shortName: 'Ankita',
  role: 'Senior Software Engineer',
  location: 'Hyderabad, Telangana',
  email: 'riya.ankita24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ankita-panigrahi-4654917a/',
  github: 'https://github.com/ankita24',
  // EDITABLE PLACEHOLDER — replace /public/resume/Ankita-Panigrahi-Resume.pdf
  // with your actual resume PDF (keep the same filename, or update this path).
  resumePath: '/api/resume',
  resumeFileName: 'Ankita_Panigrahi_9_years.pdf',
  yearsOfExperience: '9+'
};

export const openToRoles = [
'Tech Lead',
'Manager',
'Product Engineer',
'Full Stack Developer',
'Senior Developer'];

export const navLinks = [
{ label: 'About', href: '#about' },
{ label: 'Experience', href: '#experience' },
{ label: 'Projects', href: '#projects' },
{ label: 'Expertise', href: '#expertise' },
{ label: 'Contact', href: '#contact' }];


export const hero = {
  eyebrow: 'Senior Software Engineer · Full-Stack',
  headlineLines: ['Building scalable products.', 'Solving meaningful problems.'],
  intro:
  'Nine-plus years of engineering across web and mobile. Deep in React and TypeScript, comfortable across Node.js and PostgreSQL, and used to owning technical decisions from first requirement to production.',
  image: "https://images.unsplash.com/photo-1655139028657-80691005fd19",
  imageAlt:
  'Dim workspace with a laptop glowing in a dark room, deep shadows, low-key lighting, dark desk and muted navy tones'
};

export const about = {
  heading: 'Engineering that ships, and keeps working.',
  paragraphs: [
  'I am a senior engineer with more than nine years of experience building web and mobile applications. My strongest ground is React and TypeScript, and I have extended that into Node.js, Express.js, PostgreSQL, React Native and Firebase so I can follow a problem wherever it leads.',
  'I enjoy untangling complex engineering problems and turning them into clear, maintainable systems. That has included microfrontend architecture, merchant tooling, certification workflows and a full product I built and launched on my own.',
  'I work closely with product and engineering stakeholders, take on architecture decisions and code reviews, and care about taking a feature from requirements all the way to production.'],

  facts: [
  { label: 'Based in', value: 'Hyderabad, Telangana' },
  { label: 'Currently', value: 'Senior Software Engineer, Nivoda' },
  { label: 'Education', value: 'B.Tech CSE, IIIT Bhubaneswar (2012–2016)' },
  { label: 'Experience', value: '9+ years' }]

};

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
  tech: string[];
  placeholder?: string;
}

export const experience: ExperienceItem[] = [
{
  id: 'nivoda',
  company: 'Nivoda',
  title: 'Senior Software Engineer',
  period: 'Nov 2023 – Present',
  summary: 'Web and mobile platforms for jewellery, diamonds and gemstones.',
  points: [
  'Contributed to the Jewellery, Diamonds and Gemstones platforms across web and mobile applications, including microfrontend architecture.',
  'Led WISE certification development for lab-grown diamonds, from collection through to report verification.',
  'Developed backend APIs and services using Node.js, Express.js and PostgreSQL.'],

  tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Microfrontends', 'React Native']
},
{
  id: 'dunzo',
  company: 'Dunzo',
  title: 'Software Engineer 2',
  period: 'Feb 2022 – Sept 2023',
  summary: 'Merchant-facing tooling and catalog modernisation.',
  points: [
  'Built and enhanced merchant-facing tools including the picker dashboard, product catalog and warehouse management system.',
  'Implemented a micro-frontend architecture to modernise the catalog tool, enabling adoption of newer technologies.'],

  tech: ['React', 'TypeScript', 'Microfrontends']
},
{
  id: 'noticeboard',
  company: 'Noticeboard',
  title: 'Software Engineer',
  period: 'Oct 2020 – Feb 2022',
  summary: 'Learning content and management dashboards for frontline teams.',
  points: [
  'Developed courses and assessments for blue-collar workers, integrated into the app.',
  'Built a noticeboard dashboard for higher management, enabling centralised reporting, streamlined communication and efficient information sharing.'],

  tech: ['React', 'TypeScript'],
  placeholder: 'EDITABLE PLACEHOLDER: add any further technologies or details for this role.'
},
{
  id: 'getmyparking',
  company: 'Get My Parking',
  title: 'Software Engineer 2',
  period: 'Sept 2019 – Oct 2020',
  summary: 'B2B dashboard for parking operators.',
  points: [
  'Worked on a dashboard providing B2B solutions for apps, enabling operators to create and manage parking lots, parking passes and sessions.'],

  tech: ['React'],
  placeholder: 'EDITABLE PLACEHOLDER: add any further technologies or details for this role.'
},
{
  id: 'infosys',
  company: 'Infosys',
  title: 'System Engineer',
  period: 'May 2016 – June 2018',
  summary: 'Early-career engineering on a client interview portal.',
  points: ['Worked on building an interview portal for a client.'],
  tech: [],
  placeholder: 'EDITABLE PLACEHOLDER: add technologies used on this engagement.'
}];


export const doseItUp = {
  name: 'DoseItUp',
  tagline: 'Full-Stack Medicine Management Platform',
  website: 'https://doseitup.com/',
  android: 'https://play.google.com/store/apps/details?id=com.doseitup.app',
  intro:
  'An independent product I designed, built and launched: a medicine management platform with a caregiver dashboard and an Android application.',
  problem:
  'Taking the right medicine at the right time is easy to get wrong, and the people who support patients often have no visibility when a dose is missed.',
  solution:
  'DoseItUp lets people schedule medicines and receive reminders, while a caregiver dashboard surfaces missed-dose alerts so support can happen when it matters.',
  features: [
  'Authentication',
  'Medicine scheduling',
  'Automated reminders',
  'Missed-dose alerts',
  'Caregiver dashboard',
  'Android application'],

  architecture: [
  { layer: 'Web dashboard', detail: 'React and TypeScript' },
  { layer: 'Mobile app', detail: 'React Native with Expo (Android)' },
  { layer: 'Data and auth', detail: 'Firebase and Firestore' },
  { layer: 'Server logic', detail: 'Firebase Cloud Functions' }],

  role:
  'Sole developer. I independently designed, built and launched the platform, covering both the web dashboard and the Android app.',
  tech: ['React', 'TypeScript', 'React Native', 'Expo', 'Firebase', 'Firestore', 'Cloud Functions']
};

export const wise = {
  name: 'WISE',
  tagline: 'Lab-Grown Diamond Certification Platform',
  context: 'Professional project at Nivoda',
  description:
  'I led the development of WISE, a certification flow for lab-grown diamonds that spans collection through to report verification.',
  note: 'Details are intentionally high level to respect company confidentiality.',
  tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL']
};

export const skillGroups = [
{ title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML', 'CSS'] },
{ title: 'Mobile', items: ['React Native', 'Expo'] },
{ title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
{ title: 'Data and cloud', items: ['PostgreSQL', 'Firebase', 'Firestore', 'Cloud Functions'] },
{
  title: 'Architecture',
  items: ['Microfrontends', 'Scalable frontend architecture', 'Application performance']
},
{
  title: 'Leadership',
  items: [
  'Technical design',
  'Code reviews',
  'Mentoring',
  'Delivery coordination',
  'Cross-functional collaboration']

},
{ title: 'Also on my resume', items: ['AI', 'Product management'] }];


export const contact = {
  heading: "Let's build something worthwhile.",
  body: 'I am open to conversations about Tech Lead, Manager, Product Engineer, Full Stack Developer and Senior Developer roles. If you have a team or a problem worth solving, I would like to hear about it.'
};