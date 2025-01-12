import About from "@/components/sections/about";
import Header from "@/components/sections/header";
import Project from "@/components/sections/project";
import WorkExperience from "@/components/sections/work-experience";
import Container from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <Container className="text-base grid gap-12">
      <Header />
      <About />
      <WorkExperience />
      <Project />
      <ThemeToggle />
    </Container>
  );
}
