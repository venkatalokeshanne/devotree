module.exports = {
  i18n: {
    defaultLocale: 'en',
    defaultNS: "home",
    locales: ['en', 'fr'],
    localePath: typeof window === "undefined" ? "public/locales" : "locales",
  },
};