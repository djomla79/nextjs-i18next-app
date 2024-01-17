import styles from './page.module.css';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/i18next/TranslationProvider';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/i18next/LanguageChanger';

type HomeProps = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ['home', 'components'];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <main className={styles.main}>
        <h1>{t('greeting')}</h1>
        <ExampleClientComponent />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
