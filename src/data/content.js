import {
  BriefcaseBusiness,
  GraduationCap,
  ClipboardList,
  Users,
  Palette,
} from "lucide-react";

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Training", to: "/training" },
  { label: "Events", to: "/events" },
  { label: "Partnerships", to: "/partnerships" },
];

export const services = [
  {
    letter: "A",
    id: "career-employability",
    icon: BriefcaseBusiness,
    title: "Career & Employability Support",
    strap: "Practical, independent support to help you present yourself with confidence.",
    description:
      "We help individuals build the everyday tools of a strong job search and a durable career: clear documents, confident interviews and workplace communication that holds up under pressure.",
    items: [
      "Professional CV development",
      "Cover letter support",
      "Job application guidance",
      "Interview preparation and coaching",
      "Career readiness workshops",
      "Employability skills training",
      "Workplace communication training",
      "Professional profile development",
      "General career development guidance",
    ],
    disclaimer:
      "SOPConnect provides independent career-development and employability support. We do not act as a recruitment agency, introduce candidates to employers or guarantee employment, visa sponsorship or immigration outcomes.",
  },
  {
    letter: "B",
    id: "education-training",
    icon: GraduationCap,
    title: "Education & Professional Training",
    strap: "Practical learning for people building new skills at any career stage.",
    description:
      "From exam preparation to digital literacy and workplace communication, our programmes are built for people who want skills they can use immediately — delivered individually or to organisations.",
    items: [
      "IELTS preparation",
      "IT and digital skills training",
      "Workplace skills training",
      "Communication and presentation training",
      "Career development courses",
      "Employability workshops",
      "Personal development programmes",
      "Professional development seminars",
      "Bespoke training for organisations",
      "Group and individual training sessions",
    ],
    disclaimer:
      "Courses are described as training, workshops, masterclasses or professional-development courses. Any course marketed as accredited carries genuine, verifiable accreditation.",
  },
  {
    letter: "C",
    id: "educational-support",
    icon: ClipboardList,
    title: "Educational Support Services",
    strap: "Non-regulated, administrative guidance through education processes.",
    description:
      "We help people navigate the paperwork and preparation around education and qualification-recognition processes, offering research, document guidance and readiness support — never a guarantee of outcome.",
    items: [
      "General admissions information",
      "Course and institution research",
      "Application document guidance",
      "Personal statement support",
      "Administrative assistance with education applications",
      "Ecctis process guidance and administrative support",
      "Education-related documentation support",
      "Student readiness sessions",
      "Pre-enrolment information and preparation",
    ],
    disclaimer:
      "SOPConnect does not represent a university, awarding organisation or Ecctis, and does not promise admission, qualification recognition or visa approval.",
  },
  {
    letter: "D",
    id: "conferences-events",
    icon: Users,
    title: "Conferences, Workshops & Business Events",
    strap: "Professional and community events, planned and delivered end to end.",
    description:
      "We design and run conferences, seminars, panels and networking programmes that bring professionals and organisations together around career development, leadership and industry practice.",
    items: [
      "Business conferences",
      "Career development events",
      "Professional workshops",
      "Educational seminars",
      "Networking events",
      "Community development programmes",
      "Panel discussions",
      "Leadership events",
      "Corporate training events",
      "Industry talks and masterclasses",
    ],
  },
  {
    letter: "E",
    id: "culture-creative",
    icon: Palette,
    title: "Cultural & Creative Programmes",
    strap: "Community-facing experiences built around creativity and culture.",
    description:
      "Alongside our professional work, we develop cultural showcases and creative community programmes — spaces for participation, performance and shared experience.",
    items: [
      "Cultural events",
      "Creative showcases",
      "Live performances",
      "Community arts programmes",
      "Talent showcases",
      "Cultural exhibitions",
      "Creative workshops",
      "Performer and programme coordination",
      "Educational and cultural festivals",
      "Collaborative community programmes",
    ],
  },
];

export const values = [
  { title: "Integrity", description: "We describe our services accurately and never promise outcomes we can't guarantee." },
  { title: "Professionalism", description: "Every programme, document and event is prepared to a standard we'd put our name to." },
  { title: "Development", description: "We measure our work by the practical skills and confidence people leave with." },
  { title: "Inclusion", description: "Our programmes are built for people from a wide range of backgrounds and starting points." },
  { title: "Creativity", description: "We bring imagination to how learning and events are designed and delivered." },
  { title: "Collaboration", description: "We build our best work alongside partners, trainers and the communities we serve." },
  { title: "Transparency", description: "What's on the website is what we currently do — future plans are labelled as such." },
];

export const fullDisclaimer =
  "SOPConnect Consultancy Limited provides independent career-development, educational-support, training and event services. SOPConnect does not act as a recruitment agency, introduce candidates to employers or guarantee employment, sponsorship, admission or visa approval. SOPConnect does not provide regulated immigration advice. Individuals requiring immigration advice should consult an appropriately regulated immigration adviser or solicitor.";

export const shortDisclaimer =
  "SOPConnect does not provide recruitment, job-placement or regulated immigration-advice services and does not guarantee employment, sponsorship, admission or visa outcomes.";

export const enquiryCategories = [
  "Career Support",
  "Training Programme",
  "Educational Support",
  "Event Registration",
  "Partnership",
  "Corporate Training",
  "General Enquiry",
];

export const trainingProgrammes = [
  {
    title: "IELTS Preparation",
    mode: "In-person & online",
    duration: "6 weeks",
    level: "All levels",
    description: "Structured preparation across all four IELTS components, with regular practice tests and feedback.",
  },
  {
    title: "Digital & IT Skills for the Workplace",
    mode: "Hybrid",
    duration: "4 weeks",
    level: "Beginner–Intermediate",
    description: "Core digital literacy and common workplace software, taught with practical, job-relevant tasks.",
  },
  {
    title: "Interview & Workplace Communication",
    mode: "In-person",
    duration: "1-day workshop",
    level: "All levels",
    description: "Interview technique, professional communication and confident self-presentation.",
  },
  {
    title: "Bespoke Organisational Training",
    mode: "On-site or online",
    duration: "Custom",
    level: "Teams & organisations",
    description: "Workplace skills, communication and development programmes designed around your team's needs.",
  },
];

export const upcomingEvents = [
  {
    title: "Career Development Conference",
    status: "Upcoming",
    date: "To be confirmed",
    location: "London",
    description: "A day of talks and workshops on career progression, workplace skills and professional growth.",
  },
  {
    title: "Employability Skills Workshop",
    status: "Upcoming",
    date: "To be confirmed",
    location: "Online",
    description: "A practical workshop on CVs, interviews and workplace communication.",
  },
  {
    title: "Cultural Showcase Evening",
    status: "Proposed",
    date: "To be confirmed",
    location: "To be confirmed",
    description: "An evening of performance and creative showcase, open to the community.",
  },
];
