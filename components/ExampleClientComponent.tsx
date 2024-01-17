'use client';

import { useTranslation } from 'react-i18next';

export default function ExampleClientComponent() {
  const { t } = useTranslation();
  return <p>{t('components:greeting-ec')}</p>;
}
