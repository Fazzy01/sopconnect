import homeHero from "../assets/home/hero.jpg";
import aboutHero from "../assets/about/hero.jpg";
import servicesHero from "../assets/services/hero.jpg";
import trainingHero from "../assets/training/hero.jpg";
import eventsHero from "../assets/events/hero.jpg";
import partnershipsHero from "../assets/partnerships/hero.jpg";

import careerEmployability from "../assets/services/career-employability.jpg";
import educationTraining from "../assets/services/education-training.jpg";
import educationalSupport from "../assets/services/educational-support.jpg";
import conferencesEvents from "../assets/services/conferences-events.jpg";
import cultureCreative from "../assets/services/culture-creative.jpg";

import careerDevelopmentConference from "../assets/events/career-development-conference.jpg";
import employabilitySkillsWorkshop from "../assets/events/employability-skills-workshop.jpg";
import culturalShowcaseEvening from "../assets/events/cultural-showcase-evening.jpg";

export const heroImages = {
  home: homeHero,
  about: aboutHero,
  services: servicesHero,
  training: trainingHero,
  events: eventsHero,
  partnerships: partnershipsHero,
};

// One per service category (A-E), used on the Home hero grid, the Home
// "five ways we work with you" cards, and the Services page.
export const serviceImages = {
  "career-employability": careerEmployability,
  "education-training": educationTraining,
  "educational-support": educationalSupport,
  "conferences-events": conferencesEvents,
  "culture-creative": cultureCreative,
};

// Matches upcomingEvents order in content.js.
export const eventImages = [
  careerDevelopmentConference, // Career Development Conference
  employabilitySkillsWorkshop, // Employability Skills Workshop
  culturalShowcaseEvening, // Cultural Showcase Evening
];
