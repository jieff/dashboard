import { Link } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import { buttonVariants } from './custom/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { cn } from '@/lib/utils';
import useCheckActiveNav from '@/hooks/use-check-active-nav';
import { SideLink } from '@/data/sidelinks';

interface NavProps {
  isCollapsed: boolean;
  links: SideLink[];
  closeNav: () => void;
}

export default function Nav({ links, isCollapsed, closeNav }: NavProps) {
  const renderLink = ({ sub, ...rest }: SideLink) => {
    const key = `${rest.title}-${rest.href}`;

    if (isCollapsed && sub) {
      return (
        <NavLinkIconDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />
      );
    }

    if (isCollapsed) {
      return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />;
    }

    if (sub) {
      return <NavLinkDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />;
    }

    return <NavLink {...rest} key={key} closeNav={closeNav} />;
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        'group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none'
      )}
    >
      <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
        {links.map(renderLink)}
      </nav>
    </div>
  );
}

interface NavLinkProps extends SideLink {
  closeNav: () => void;
}

function NavLink({ title, icon, label, href, closeNav }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Link
      to={`/dashboard${href}`} // Certifique-se de usar o caminho completo aqui
      onClick={closeNav}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? 'secondary' : 'ghost',
          size: 'sm',
        }),
        'h-12 justify-start text-wrap rounded-none px-6'
      )}
      aria-current={checkActiveNav(href) ? 'page' : undefined}
    >
      <div className='mr-2'>{icon}</div>
      {title}
      {label && (
        <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
          {label}
        </div>
      )}
    </Link>
  );
}

function NavLinkDropdown({ title, icon, label, sub, closeNav }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const isChildActive = !!sub?.find((s) => checkActiveNav(s.href));

  return (
    <Collapsible defaultOpen={isChildActive}>
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'group h-12 w-full justify-start rounded-none px-6'
        )}
      >
        <div className='mr-2'>{icon}</div>
        {title}
        {label && (
          <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
            {label}
          </div>
        )}
        <span className={cn('ml-auto transition-all')}>
          <IconChevronDown stroke={1} />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className='collapsibleDropdown' asChild>
        <ul>
          {sub!.map((sublink) => (
            <li key={sublink.title} className='my-1 ml-8'>
              <NavLink {...sublink} closeNav={closeNav} />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

function NavLinkIcon({ title, icon, href }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Link
      to={`/dashboard${href}`} // Certifique-se de usar o caminho completo aqui
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? 'secondary' : 'ghost',
          size: 'icon',
        }),
        'h-12 w-12'
      )}
    >
      {icon}
      <span className='sr-only'>{title}</span>
    </Link>
  );
}

function NavLinkIconDropdown({ title, icon, sub }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const isChildActive = !!sub?.find((s) => checkActiveNav(s.href));

  return (
    <Collapsible defaultOpen={isChildActive}>
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: isChildActive ? 'secondary' : 'ghost', size: 'icon' }),
          'group h-12 w-12'
        )}
      >
        {icon}
        <span className='sr-only'>{title}</span>
        <span className={cn('ml-auto transition-all')}>
          <IconChevronDown stroke={1} />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className='collapsibleDropdown' asChild>
        <ul>
          {sub!.map((sublink) => (
            <li key={sublink.title} className='my-1 ml-8'>
              <NavLink {...sublink} closeNav={closeNav} />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
