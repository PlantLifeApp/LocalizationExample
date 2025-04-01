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
                    welcome: "Welcome to React and react-i18next",
                    button1: "Press me",
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
                    welcome: "Tervetuloa Reactiin ja react-i18nextiin",
                    button1: "Paina minua",
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
                    welcome: "Välkommen till React och react-i18next",
                    button1: "Tryck på mig",
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
        return storedLang || "en"
    } catch (error) {
        console.error("Error fetching stored language", error)
        return "en"
    }
}

getStoredLanguage().then((lang) => {
    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: lang,
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            }
        })
})
export default i18n