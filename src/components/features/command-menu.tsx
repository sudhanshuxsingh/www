'use client';
import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { CommandDialog } from '../ui/command';
import { IconBrandCodepen, IconTablePlus } from '@tabler/icons-react';

export function CMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  const [pages, setPages] = React.useState<string[]>(['home']);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === 'home';

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  // const onKeyDown = React.useCallback(
  //     (e: KeyboardEvent) => {
  //         if (isHome || inputValue.length) {
  //             return
  //         }

  //         if (e.key === 'Backspace') {
  //             e.preventDefault()
  //             popPage()
  //         }
  //     },
  //     [inputValue.length, isHome, popPage],
  // )

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      }, 100);

      setInputValue('');
    }
  }

  return (
    <Command
      ref={ref}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          bounce();
        }

        if (isHome || inputValue.length) {
          return;
        }

        if (e.key === 'Backspace') {
          e.preventDefault();
          popPage();
          bounce();
        }
      }}
    >
      <div className="mt-1 pl-2">
        {pages.map((p) => (
          <div key={p} current-page-badge="">
            {p}
          </div>
        ))}
      </div>
      <Command.Input
        autoFocus
        placeholder="What do you need?"
        onValueChange={(value) => {
          setInputValue(value);
        }}
      />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        {activePage === 'home' && (
          <Home searchProjects={() => setPages([...pages, 'projects'])} />
        )}
        {activePage === 'projects' && <Projects />}
      </Command.List>
    </Command>
  );
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CMDK />
      </CommandDialog>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function Home({ searchProjects }: { searchProjects: Function }) {
  return (
    <>
      <Command.Group heading="Projects">
        <Item
          shortcut="S P"
          onSelect={() => {
            searchProjects();
          }}
        >
          <IconBrandCodepen stroke={2} />
          Search Projects...
        </Item>
        <Item>
          <IconTablePlus />
          Create New Project...
        </Item>
      </Command.Group>
      {/* <Command.Group heading="Teams">
                <Item shortcut="⇧ P">
                    <TeamsIcon />
                    Search Teams...
                </Item>
                <Item>
                    <PlusIcon />
                    Create New Team...
                </Item>
            </Command.Group>
            <Command.Group heading="Help">
                <Item shortcut="⇧ D">
                    <DocsIcon />
                    Search Docs...
                </Item>
                <Item>
                    <FeedbackIcon />
                    Send Feedback...
                </Item>
                <Item>
                    <ContactIcon />
                    Contact Support
                </Item>
            </Command.Group> */}
    </>
  );
}

function Projects() {
  return (
    <>
      <Item>Project 1</Item>
      <Item>Project 2</Item>
      <Item>Project 3</Item>
      <Item>Project 4</Item>
      <Item>Project 5</Item>
      <Item>Project 6</Item>
    </>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div sub-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}
