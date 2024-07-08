import { AppearanceForm } from './appearance-form'
import ContentSection from '../components/content-section'

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='Aparência'
      desc='Personalize a aparência do aplicativo. Alternar automaticamente entre o dia
 e temas noturnos.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
