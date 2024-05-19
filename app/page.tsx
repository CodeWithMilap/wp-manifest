import ExpertiseSection from '@/components/ExpertiseSection';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { LatestPosts } from '@/components/LatestPosts';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <main className='grow'>
      <HeroSection />
      <IntroSection />
      <ExpertiseSection />
      <WorkSection />
      <LatestPosts />
    </main>
  );
}
