import { projects } from "@/lib/constants";
import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";
import { cn } from "@/lib/utils";

export default function Project() {
    return (
        <div className="">
            <p className="font-medium mb-4">Projects</p>
            {
                projects.map(({ name, description, hasPreview, href, previewDark, previewLight }, i) => {
                    return (
                        <div className="space-y-6" key={i}>
                            <div className="">
                                <LinkPreview
                                    url={href}
                                    isStatic={true}
                                    imageSrc={previewDark[0]}
                                >
                                    {name}
                                </LinkPreview>
                                <p className="text-muted-foreground">{description}</p>
                            </div>
                            {
                                hasPreview ? <div className="flex -space-x-8">
                                    {
                                        previewDark.map((preview, idx) => (
                                            <a key={idx} className={cn(
                                                "w-28 h-28 min-[475px]:w-32 min-[475px]:h-32 min-[500px]:w-36 min-[500px]:h-36 bg-secondary border rounded-md overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition duration-200 ease-in-out",
                                                idx % 2 == 0 ? 'rotate-6' : '-rotate-6'
                                            )} href={href} target="_blank">
                                                <Image src={preview} width={600} height={600} alt="tes" className="dark:block hidden" />
                                                <Image src={previewLight[idx]} width={600} height={600} alt="tes" className="dark:hidden" />
                                            </a>
                                        ))
                                    }
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}