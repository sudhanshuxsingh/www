import About from "@/app/(home)/sections/about";
import Header from "@/app/(home)/sections/header";
import Project from "@/app/(home)/sections/project";
import WorkExperience from "@/app/(home)/sections/work-experience";
import Container from "@/components/ui/container";
// import FeatureCard from "@/components/ui/feature-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <Container className="grid gap-12">
      <Header />
      <About />
      <WorkExperience />
      <Project />
      {/* <FeatureCard /> */}
      <ThemeToggle />
    </Container>
  );
}
