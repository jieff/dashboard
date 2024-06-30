import { AccountForm } from './account-form'
import ContentSection from '../components/content-section'

export default function SettingsAccount() {
  return (
    <ContentSection
      title='Conta'
      desc='Atualize as configurações da sua conta. Defina seu idioma preferido e
            fuso horário.'
    >
      <AccountForm />
    </ContentSection>
  )
}
