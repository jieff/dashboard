// UserAuthForm.tsx
import { HTMLAttributes, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/custom/button';
import { PasswordInput } from '@/components/custom/password-input';
import { cn } from '@/lib/utils';
import { userData } from '../../../data';
import { useAuth } from '@/pages/auth/components/AuthContext';

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Por favor, digite seu e-mail' })
    .email({ message: 'Endereço de e-mail inválido' }),
  password: z
    .string()
    .min(1, {
      message: 'Por favor, digite sua senha',
    })
    .min(7, {
      message: 'A senha deve ter pelo menos 7 caracteres',
    }),
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (data.email === userData.username && data.password === userData.password) {
        login();
        navigate('/dashboard');
      } else {
        setError('Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
      }
    }, 2000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder='nome@exemplo.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <FormLabel>Senha</FormLabel>
                    <Link
                      to='/forgot-password'
                      className='text-sm font-medium text-muted-foreground hover:opacity-75'
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <div className='text-red-500 text-sm'>{error}</div>
            )}
            <Button className='mt-2' loading={isLoading}>
              Entrar
            </Button>

            <div className='relative my-2'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Ou continue com
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                loading={isLoading}
                leftSection={<IconBrandGoogle className='h-4 w-4' />}
              >
                Google
              </Button>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                loading={isLoading}
                leftSection={<IconBrandGithub className='h-4 w-4' />}
              >
                GitHub
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
