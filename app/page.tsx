import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { LatestPosts } from "@/components/LatestPosts";

export default function Home() {
  return (
    <main className="grow">
      <HeroSection />
      <IntroSection />
      <LatestPosts />
    </main>
  );
}
