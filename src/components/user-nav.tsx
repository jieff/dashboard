import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/custom/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/pages/auth/components/AuthContext';

export function UserNav() {
  const navigate = useNavigate();
  const { email, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/sign-in');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {/* Adiciona a condição para exibir o email */}
          {email ? (
            <span className="h-8 w-8 flex items-center justify-center">
              {email.charAt(0).toUpperCase()}
            </span>
          ) : (
            <span className="h-8 w-8 flex items-center justify-center">
              JC {/* AvatarFallback ou outro texto padrão */}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">Jieff Cavalcanti</p>
            {/* Exibe dinamicamente o email */}
            <p className="text-sm font-medium leading-none">
              {email}
            </p>
            {/* Email fixo removido */}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Perfil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Cobrança
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Configurações
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Novo Time</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleLogout}>
          Sair
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
