import type { Dictionary } from '@/dictionaries/en';

const dictionaries = {
  en: () => import('@/dictionaries/en').then((module) => module.en),
  fr: () => import('@/dictionaries/fr').then((module) => module.fr),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
