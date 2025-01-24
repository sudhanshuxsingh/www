import Image from 'next/image';
import { AspectRatio } from './aspect-ratio';

export default function FeatureCard() {
  return (
    <div className="grid gap-y-1 rounded-md bg-secondary p-1 text-sm dark:bg-secondary/60">
      <div className="flex items-center gap-x-2 rounded-md border bg-background/80 p-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="w-[50px] flex-shrink-0">
          <AspectRatio ratio={1}>
            <Image
              src="/current_read.jpg"
              alt="Image"
              className="rounded-md object-cover"
              width={736}
              height={736}
            />
          </AspectRatio>
        </div>
        <div className="flex w-full flex-col overflow-hidden">
          <a
            href="https://www.viz.com/shonenjump/chapters/one-piece"
            target="_blank"
          >
            One Piece{' '}
            <span className="text-muted-foreground">(Peak Piece)</span>
          </a>
          <p className="mt-[2px] text-xs text-muted-foreground">
            Created by Eiichiro Oda
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-1.5 py-1 pl-1">
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-muted-foreground"></span>
        </span>
        <div className="text-xs text-muted-foreground">
          Current favorite read & watch
        </div>
      </div>
    </div>
  );
}
