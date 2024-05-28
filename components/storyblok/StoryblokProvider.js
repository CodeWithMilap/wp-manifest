/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import { HeroSection } from "../HeroSection";
import { IntroSection } from "../IntroSection";
import ExpertiseSection from "../ExpertiseSection";
import WorkSection from "../WorkSection";
import { LatestPosts } from "../LatestPosts";
import MenuLink from './MenuLink'
import ServicesItem from "../ServicesItem";
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  'menu_link': MenuLink,
  HeroSection: HeroSection,
  IntroSection: IntroSection,
  ExpertiseSection: ExpertiseSection,
  WorkSection: WorkSection,
  LatestPosts: LatestPosts,
  ServicesItem: ServicesItem
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
