import About from '@/app/(home)/sections/about';
import Header from '@/app/(home)/sections/header';
import Project from '@/app/(home)/sections/project';
import WorkExperience from '@/app/(home)/sections/work-experience';
import Container from '@/components/ui/container';
// import FeatureCard from "@/components/ui/feature-card";
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Container className="grid min-h-dvh grid-cols-1 justify-center px-0 [--gutter-width:2.5rem] md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
        <div className="border-x-(--pattern-fg) col-start-1 row-span-full row-start-1 hidden border-x bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:block"></div>
        <div className="grid gap-12 py-16">
          <Header />
          <About />
          <WorkExperience />
          <Project />
          {/* <FeatureCard /> */}
          <ThemeToggle />
        </div>
        <div className="border-x-(--pattern-fg) row-span-full row-start-1 hidden border-x bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:col-start-3 md:block"></div>
      </Container>
    </div>
  );
}
