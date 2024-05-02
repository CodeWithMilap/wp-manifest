import ExpertiseSection from '@/components/ExpertiseSection';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { LatestPosts } from '@/components/LatestPosts';
import PageHeader from '@/components/PageHeader';
import PortfolioItem from '@/components/PortfolioItem';

export default function Home() {
  return (
    <main className='grow'>
      <HeroSection />
      <IntroSection />
      <ExpertiseSection />
      <LatestPosts />
    </main>
  );
}
