import { Card } from '@/components/ui/card';
import { ForgotForm } from './components/forgot-form';
import { Link } from 'react-router-dom';
import { IconMail } from '@tabler/icons-react'; // Importe o ícone de e-mail do Shadcn ou da sua biblioteca de ícones

export default function ForgotPassword() {
  return (
    <>
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            {/* Substitua o SVG atual pelo ícone de e-mail */}
            <IconMail className='mr-2 h-6 w-6 text-primary' /> {/* Exemplo de uso do ícone de e-mail */}
            <h1 className='text-xl font-medium'>Esqueceu sua Senha</h1>
          </div>
          <Card className='p-6'>
            <div className='mb-2 flex flex-col space-y-2 text-left'>
              <h1 className='text-md font-semibold tracking-tight'>
                Esqueceu sua senha?
              </h1>
              <p className='text-sm text-muted-foreground'>
                Digite seu e-mail cadastrado e<br /> nós lhe enviaremos um link
                para redefinir sua senha.
              </p>
            </div>
            <ForgotForm />
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              Não tem uma conta?{' '}
              <Link
                to='/sign-up'
                className='underline underline-offset-4 hover:text-primary'
              >
                Inscrever-se
              </Link>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
