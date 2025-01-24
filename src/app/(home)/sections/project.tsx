import { projects } from '@/lib/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import GridContainer from '@/components/ui/grid-container';
import PatternContainer from '@/components/ui/pattern-container';
// import div from "@/components/ui/grid-container";

export default function Project() {
  return (
    <div className="">
      <GridContainer>
        <PatternContainer className="px-2 md:px-0">
          <p className="mb-4 font-medium">Projects</p>
        </PatternContainer>
      </GridContainer>
      {projects.map(
        (
          { name, description, hasPreview, href, previewDark, previewLight },
          i
        ) => {
          return (
            <GridContainer className="space-y-6 px-2 md:px-0" key={i}>
              <div className="">
                <Link href={href}>{name}</Link>
                <p className="text-muted-foreground">{description}</p>
              </div>
              {hasPreview ? (
                <div className="flex -space-x-8 px-1 pb-4">
                  {previewDark.map((preview, idx) => (
                    <Link
                      key={idx}
                      className={cn(
                        'h-28 w-28 overflow-hidden rounded-md border bg-secondary shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_6px_rgba(0,0,0,0.08)] min-[475px]:h-32 min-[475px]:w-32 min-[500px]:h-36 min-[500px]:w-36',
                        idx % 2 == 0 ? 'rotate-6' : '-rotate-6'
                      )}
                      href={href}
                      target="_blank"
                    >
                      <Image
                        src={preview}
                        width={600}
                        height={600}
                        alt="tes"
                        className="hidden dark:block"
                      />
                      <Image
                        src={previewLight[idx]}
                        width={600}
                        height={600}
                        alt="tes"
                        className="dark:hidden"
                      />
                    </Link>
                  ))}
                </div>
              ) : null}
            </GridContainer>
          );
        }
      )}
    </div>
  );
}
