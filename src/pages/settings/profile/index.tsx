import ProfileForm from './profile-form'
import ContentSection from '../components/content-section'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Perfil'
      desc='É assim que outras pessoas verão você no site.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
