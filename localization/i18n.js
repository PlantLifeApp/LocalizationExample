import i18n from "i18next"
import { initReactI18next } from "react-i18next"

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


export default i18n