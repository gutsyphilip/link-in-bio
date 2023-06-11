import PageItem from '@/components/home/PageItem';
import PagesGrid from '@/components/home/PagesGrid';
import ThemeSwitcher from '@/components/home/ThemeSwitcher';
import { pages } from '@/data/payload.json';

const HomePage: React.FC = () => {
  return (
    <main>
      <ThemeSwitcher />
      <PagesGrid pages={pages} />
    </main>
  );
};

export default HomePage;