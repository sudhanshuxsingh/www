import About from "@/components/sections/about";
import Header from "@/components/sections/header";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <Container className="text-base grid gap-6">
      <Header />
      <About />
    </Container>
  );
}
