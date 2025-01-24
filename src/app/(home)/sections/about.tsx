// import FeatureCard from "../../../components/ui/feature-card";

import GridContainer from '@/components/ui/grid-container';

export default function About() {
  return (
    <GridContainer className="space-y-4 text-pretty px-2 text-muted-foreground md:px-0">
      <p>
        I build <span className="italic text-foreground">pixel-perfect</span>{' '}
        designs and{' '}
        <span className="italic text-foreground">scalable solutions</span> for
        the modern web.
      </p>
      <p>
        When not coding, you&apos;ll find me immersed in anime, manga, and
        webtoons, always exploring new stories and worlds.{' '}
      </p>
      {/* <FeatureCard /> */}
    </GridContainer>
  );
}
