const langs = {
  "en-us": () => import("@/src/langs/en.json").then((module) => module.default),
  en: () => import("@/src/langs/en.json").then((module) => module.default),
  fa: () => import("@/src/langs/fa.json").then((module) => module.default),
  "fa-ir": () => import("@/src/langs/fa.json").then((module) => module.default),
};

export const getLangs = async (locale) => langs[locale]();
