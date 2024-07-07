import { useState } from 'react';
import { IconChevronsLeft, IconMenu2, IconX } from '@tabler/icons-react';
import { Button } from './custom/button'; // Certifique-se de importar o Button corretamente
import Nav from './nav';
import { cn } from '@/lib/utils';
import { sidelinks } from '@/data/sidelinks';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
          isCollapsed ? 'md:w-14' : 'md:w-64'
        }`
      )}
    >
      {/* Your overlay and layout components here */}

      <Nav
        links={sidelinks}
        isCollapsed={isCollapsed}
        closeNav={() => setNavOpened(false)} // Passando a função para fechar a navegação
      />

      {/* Scrollbar width toggle button */}
      <Button
        onClick={() => setIsCollapsed((prev) => !prev)}
        size='icon'
        variant='outline'
        className='absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex'
      >
        <IconChevronsLeft
          stroke={1.5}
          className={`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
        />
      </Button>
    </aside>
  );
}
