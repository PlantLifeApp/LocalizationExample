import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const Clock = () => {

    // get the i18n instance and the translation function
    const { i18n, t } = useTranslation()

    // state variable to hold the current date and time
    const [currentDateTime, setCurrentDateTime] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    })

    // function to get the locale based on the current language
    const getLocale = (lang) => {
        switch (lang) {
            case 'fi': return 'fi-FI'
            case 'sv': return 'sv-SE'
            case 'en': return 'en-US'
            default: return 'en-US'
        }
        }
    
    useEffect(() => {

        const update = () => {
        
            const now = new Date()
            const locale = getLocale(i18n.language)     // get the locale based on the current language
            
            setCurrentDateTime({
                date: now.toLocaleDateString(locale),   // format date based on locale
                time: now.toLocaleTimeString(locale),   // format time based on locale
            })
        }

        update()
        const timer = setInterval(update, 1000)         // update every second
        return () => clearInterval(timer)               // cleanup the interval on unmount

    }, [i18n.language])

  return (
    <View style={{ alignItems: "center" }}>
      <Text>{t("screens.home.currentTime")}</Text>
      <Text>{currentDateTime.date}</Text>
      <Text>{currentDateTime.time}</Text>
    </View>
  )
}

export default Clock