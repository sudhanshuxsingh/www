import CommandMenu from "@/components/features/command-menu";
import GridContainer from "@/components/ui/grid-container";
import PatternContainer from "@/components/ui/pattern-container";

export default function Header() {
    return (
        <GridContainer className="">
            <PatternContainer className="flex items-center gap-4 justify-between relative px-2 md:px-0">
                <h1 className="font-medium cursor-pointer text-md transition-element">
                    <span className="sr-only">Sudhanshu Singh</span>
                    <span
                        aria-hidden="true"
                        className="group relative block overflow-hidden"
                    >
                        <span className="group-hover:-translate-y-full inline-block transition-transform duration-300 ease-in-out">
                            <span
                                className="inline-block"
                            >
                                Sudhanshu Singh
                            </span>
                        </span>
                        <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            <span
                                className="inline-block"
                            >
                                sudhanshuxsingh
                            </span>
                        </span>
                    </span>
                </h1>
                <CommandMenu />
            </PatternContainer>

            <GridContainer direction="to-top" className="px-2 md:px-0">
                <p className="text-sm text-muted-foreground">
                    Building <span className="font-medium">cool things</span>
                </p>
            </GridContainer>
        </GridContainer>
    )
}