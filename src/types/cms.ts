interface HeroSection {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundVideo: {
    url: string;
    type: string;
  };
}

export interface HomePageContent {
  heroSection: HeroSection;
  // Add other sections as needed
}