export default function Header() {
    return (
        <div className="">
            <div className="cursor-pointer">
                <h1 className="font-medium text-base transition-element">
                    <span className="sr-only">Sudhanshu Singh</span>
                    <span
                        aria-hidden="true"
                        className="group relative block overflow-hidden"
                    >
                        <span className="group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out">
                            <span
                                className="inline-block"
                                style={{ transitionDelay: "290ms" }}
                            >
                                Sudhanshu Singh
                            </span>
                        </span>
                        <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                            <span
                                className="inline-block"
                                style={{ transitionDelay: "190ms" }}
                            >
                                sudhanshuxsingh
                            </span>
                        </span>
                    </span>
                </h1>
            </div>
            <p className="text-sm text-muted-foreground">
                Building <span className="font-medium">cool things</span>
            </p>
        </div>
    )
}