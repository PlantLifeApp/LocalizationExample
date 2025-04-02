import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import AsyncStorage from "@react-native-async-storage/async-storage"

const resources = {
    en: {
        translation: {
            tabs: {
                home: "Home",
            },
            screens: {
                home: {
                    welcome: "Welcome to our React Native localization demo!",
                    currentTime: "It is currently:",
                    button1: "Click me",
                    name: "Name",
                    password: "Password",
                }
            },
        }
    },
    fi: {
        translation: {
            tabs: {
                home: "Koti",
            },
            screens: {
                home: {
                    welcome: "Tervetuloa React Native lokalisointidemoomme!",
                    currentTime: "Nyt on:",
                    button1: "Klikkaa minua",
                    name: "Nimi",
                    password: "Salasana"
                }
            },
        }
    },
    sv: {
        translation: {
            tabs: {
                home: "Hem",
            },
            screens: {
                home: {
                    welcome: "Välkommen till vår React Native lokalisering demo!",
                    button1: "Klicka på mig",
                    currentTime: "Det är för närvarande:",
                    name: "Namn",
                    password: "Lösenord",
                }
            },
        }
    }
}
const getStoredLanguage = async () => {
    try {
        const storedLang = await AsyncStorage.getItem("language")
        console.log(storedLang)
        return storedLang || "en"
    } catch (error) {
        console.error("Error fetching stored language", error)
        return "en"
    }
}

const i18nInit = getStoredLanguage().then((lang) => {
    return i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: lang,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
      })
  })

export { i18nInit }
export default i18n