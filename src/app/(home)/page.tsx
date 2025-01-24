import About from '@/app/(home)/sections/about';
import Header from '@/app/(home)/sections/header';
import Project from '@/app/(home)/sections/project';
import WorkExperience from '@/app/(home)/sections/work-experience';
import Container from '@/components/ui/container';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Connect from './sections/connect';
import Location from './sections/location';

export default function Home() {
  return (
    <Container className="grid gap-12 text-base">
      <Header />
      <About />
      <Location />
      <WorkExperience />
      <Project />
      <Connect />
      <ThemeToggle />
    </Container>
  );
}
