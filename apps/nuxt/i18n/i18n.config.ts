import en from '@root/i18n/locales/en.json'
import fr from '@root/i18n/locales/fr.json'
import nl from '@root/i18n/locales/nl.json'

export default defineI18nConfig(() => ({
  defaultLocale: 'nl',
  flatJson: true,
  keystyle: 'nested',
  legacy: false,
  locales: [
    'en',
    'nl',
    'fr',
  ],
  messages: {
    en: {
      ...en,
      hello: 'Hello',
    },
    fr,
    nl: {
      ...nl,
      hello: 'Hello',
    },
  },
  warnHtmlInMessage: 'off',
}))
