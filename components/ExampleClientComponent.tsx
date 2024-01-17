'use client';

import { useTranslation } from 'react-i18next';

export default function ExampleClientComponent() {
  const { t } = useTranslation();
  const name = 'Mladen';
  return <p>{t('components:greeting-ec', { name })}</p>;
}
