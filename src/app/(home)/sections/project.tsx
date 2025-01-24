import { projects } from '@/lib/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import LinkIcon from '@/components/icon/link-icon';

export default function Project() {
  return (
    <div className="">
      <p className="mb-4 font-medium">Projects</p>
      <div className="grid gap-4">
        {projects.map(
          (
            { name, description, hasPreview, href, previewDark, previewLight },
            i
          ) => {
            return (
              <div className="space-y-6" key={i}>
                <div className="space-y-2">
                  <Link
                    href={href}
                    className="flex items-baseline underline decoration-white decoration-wavy decoration-from-font underline-offset-4"
                  >
                    <span>{name}</span>
                    <LinkIcon className="" />
                  </Link>
                  <p className="text-muted-foreground">{description}</p>
                </div>
                {hasPreview ? (
                  <div className="flex -space-x-8 px-1 pb-4">
                    {previewDark.map((preview, idx) => (
                      <Link
                        key={idx}
                        className={cn(
                          'h-28 overflow-hidden rounded-md border bg-secondary shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_6px_rgba(0,0,0,0.08)] min-[475px]:h-32 min-[475px]:w-32 min-[500px]:h-36 min-[500px]:w-36',
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
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
