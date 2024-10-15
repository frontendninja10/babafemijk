// types/index.ts

import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type EventsType = {
  _id: string;
  eventImage: {
    alt: string;
    image: string;
  };
  caption: string;
  eventDate: string;
  year: number;
};

export type AchievementsType = {
  _id: string;
  achievementImage: {
    alt: string;
    image: string;
  };
  achievementTitle: string;
  achievementDate: string;
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};
