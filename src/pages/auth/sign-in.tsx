import { Card } from '@/components/ui/card'
import { UserAuthForm } from './components/user-auth-form'
import { IconUser } from '@tabler/icons-react' // Importe o ícone de usuário do Shadcn

export default function SignIn2() {
  return (
    <>
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            {/* Substitua o SVG atual pelo ícone de usuário do Shadcn */}
            <IconUser className='mr-2 h-6 w-6 text-primary' />
            <h1 className='text-xl font-medium'>Entrar no Sistema</h1>
          </div>
          <Card className='p-6'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>Entrar</h1>
              <p className='text-sm text-muted-foreground'>
                Digite seu e-mail e senha abaixo <br />
                para entrar na sua conta
              </p>
            </div>
            <UserAuthForm />
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              Ao clicar em entrar, você concorda com nossos{' '}
              <a
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
               Termos de serviço
              </a>{' '}
              e{' '}
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
