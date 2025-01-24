// import FeatureCard from "../../../components/ui/feature-card";

import GridContainer from "@/components/ui/grid-container";

export default function About() {
    return (
        <GridContainer className="text-muted-foreground text-pretty space-y-4 px-2 md:px-0">
            <p>I build <span className="text-foreground italic ">pixel-perfect</span> designs and <span className="text-foreground italic">scalable solutions</span> for the modern web.</p>
            <p>When not coding, you&apos;ll find me immersed in anime, manga, and webtoons, always exploring new stories and worlds. </p>
            {/* <FeatureCard /> */}
        </GridContainer>

    )
}