import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";

export default function FeatureCard() {
    return (
        <div className="bg-secondary dark:bg-secondary/60 rounded-md p-1 grid gap-y-1 text-sm">
            <div className="bg-background/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-md gap-x-2 p-1 flex border items-center">
                <div className="w-[50px] flex-shrink-0">
                    <AspectRatio ratio={1}>
                        <Image src="/current_read.jpg" alt="Image" className="rounded-md object-cover" width={736} height={736} />
                    </AspectRatio>
                </div>
                <div className="flex flex-col overflow-hidden w-full">
                    <a href="https://www.viz.com/shonenjump/chapters/one-piece" target="_blank">
                        One Piece <span className="text-muted-foreground">(Peak Piece)</span>
                    </a>
                    <p className="text-muted-foreground mt-[2px] text-xs">Created by Eiichiro Oda</p>
                </div>
            </div>
            <div className="flex flex-row gap-x-1.5 items-center pl-1 py-1">
                <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-muted-foreground"></span>
                </span>
                <div className="text-xs text-muted-foreground">Current favorite read & watch</div>
            </div>
        </div>
    )
}