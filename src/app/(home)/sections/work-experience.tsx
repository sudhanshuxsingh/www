export default function WorkExperience() {
    return (
        <div className="">
            <p className="font-medium mb-4">Work</p>
            <div className="flex items-center gap-2">
                <p className="font-medium">Tata Consultancy Services</p>
            </div>
            <div className="pl-[24px] relative pb-4 text-muted-foreground">
                <div className="absolute w-[1.5px] bg-muted-foreground h-[44px] left-[3px]" />
                <div className="absolute w-[1.5px] bg-muted-foreground h-[calc(100%-8px)] top-4 left-[3px]" />
                <div className="relative pt-4 text-base">
                    <div className="w-4 h-3 border-l-[1.99px] border-b-[1.99px] rounded-bl-lg absolute -left-[21px] border-muted-foreground" />
                    <p className="font-medium">SDE | Innovator Cadre</p>
                    <p className="text-xs">
                        <>
                            Jul 2022{/* */} -{/* */} {/* */}Feb 2024{/* */}{" "}
                            {/* */}(1 yr, 7 m){/* */}{" "}
                            <span className="font-normal capitalize">
                                • {/* */}kolkata, west bengal, india
                            </span>{" "}
                        </>
                    </p>
                </div>
            </div>
            <div className="pl-[24px] relative pb-4 text-muted-foreground">
                <div className="relative pt-1 text-base">
                    <div className="w-4 h-3 border-l-[1.99px] border-b-[1.99px] rounded-bl-lg absolute -left-[21px] border-muted-foreground" />
                    <p className="font-medium">SDE | Digital Cadre</p>
                    <p className="text-xs">
                        <>
                            Jul 2022{/* */} -{/* */} {/* */}Feb 2024{/* */}{" "}
                            {/* */}(1 yr, 7 m){/* */}{" "}
                            <span className="font-normal capitalize">
                                • {/* */}kolkata, west bengal, india
                            </span>{" "}
                        </>
                    </p>
                </div>
            </div>
        </div>
    )
}