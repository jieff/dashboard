import { Card } from '@/components/ui/card'
import { SignUpForm } from './components/sign-up-form'
import { Link } from 'react-router-dom'
import { IconUser } from '@tabler/icons-react' // Importe o ícone de usuário do Shadcn

export default function SignUp() {
  return (
    <>
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            {/* Substitua o SVG atual pelo ícone de usuário do Shadcn */}
            <IconUser className='mr-2 h-6 w-6 text-primary' />
            <h1 className='text-xl font-medium'>Criar sua conta</h1>
          </div>
          <Card className='p-6'>
            <div className='mb-2 flex flex-col space-y-2 text-left'>
              <h1 className='text-lg font-semibold tracking-tight'>
                Crie a sua conta aqui
              </h1>
              <p className='text-sm text-muted-foreground'>
                Digite seu e-mail e senha para criar uma conta. <br />
                Já tem uma conta?{' '}
                <Link
                  to='/sign-in'
                  className='underline underline-offset-4 hover:text-primary'
                >
                  Entrar
                </Link>
              </p>
            </div>
            <SignUpForm />
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              Ao criar uma conta, você concorda com nossos{' '}
              <a
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                Termos de serviço
              </a>{' '}
              and{' '}
              <a
                href='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Política de Privacidade
              </a>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
