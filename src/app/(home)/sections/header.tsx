import CommandMenu from '@/components/features/command-menu';

export default function Header() {
  return (
    <div className="">
      <div className="relative flex items-center justify-between gap-4">
        <h1 className="text-md transition-element cursor-pointer font-medium">
          <span className="sr-only">Sudhanshu Singh</span>
          <span
            aria-hidden="true"
            className="group relative block overflow-hidden"
          >
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              <span className="inline-block">Sudhanshu Singh</span>
            </span>
            <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <span className="inline-block">sudhanshuxsingh</span>
            </span>
          </span>
        </h1>
        <CommandMenu />
      </div>

      <p className="text-sm text-muted-foreground">
        Building <span className="font-medium">cool things</span>
      </p>
    </div>
  );
}
