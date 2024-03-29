// Internal imports
import { enMessages } from "./Lang/English";
import { ptbrMessages } from "./Lang/BrasilianPortuguese";
import { esMessages } from "./Lang/Spanish";
import { ruMessages } from "./Lang/Russian";
import { fallbackBuilder } from "./Tools";

const standardFallback = enMessages;

export const initialState = {
  code: "en",
  lang: "English",
  name: "English",
  msgs: enMessages,
  fallback: "en",
};

export const LocaleReducer = (state: any, action: any) => {
  let lang = action.type?.toLowerCase();
  let newState;

  // change state
  switch (lang) {
    case "en":
      newState = initialState;
      break;

    case "pt-br":
      newState = {
        ...initialState,
        code: "pt-br",
        lang: "Portuguese",
        name: "Português",
        msgs: fallbackBuilder(ptbrMessages, standardFallback),
      };
      break;

    case "ru":
      newState = {
        ...initialState,
        code: "ru",
        lang: "Russian",
        name: "Русский",
        msgs: fallbackBuilder(ruMessages, standardFallback),
      };
      break;

    case "es":
      newState = {
        ...initialState,
        code: "es",
        lang: "Espanish",
        name: "Español",
        msgs: fallbackBuilder(esMessages, standardFallback),
      };
      break;

    default:
      newState = initialState;
  }

  // save state to storage
  localStorage.setItem("lang", newState.code);

  return newState;
};
