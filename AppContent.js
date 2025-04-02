import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider, Surface, Button, TextInput } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Dropdown } from "react-native-paper-dropdown"

import AsyncStorage  from "@react-native-async-storage/async-storage"
import { I18nextProvider, useTranslation } from 'react-i18next'
import LANGUAGES from "./localization/languages"

import Clock from "./components/Clock"

export default function AppContent() {

      const { t, i18n } = useTranslation()
      const [language, setLanguage] = useState(i18n.language)
      const [name, setName] = useState("")
      const [password, setPassword] = useState("")
    
      const changeLanguage = async (lng) => {
        i18n.changeLanguage(lng)
        setLanguage(lng)
        await AsyncStorage.setItem("language", lng)
      }

  return (

    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
        <Surface style={styles.container}>

          <Dropdown
            placeholder={t("screens.options.languagePlaceHolder")}
            options={LANGUAGES}
            value={language}
            onSelect={(lng) => changeLanguage(lng)}
            style={styles.dropdown}
          />

          <View style={styles.welcomeView}>
            <Text>{t('screens.home.welcome')}</Text>
            <View style={{height: 20}} />

            <Clock />

          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={t('screens.home.name')}
              value={name}
              onChangeText={value => setName(value)}
            />
            <TextInput
              placeholder={t('screens.home.password')}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <Button style={styles.mainButton} mode="contained" onPress={() => { setPassword(""), setName("") }}>
              {t("screens.home.button1")}
            </Button>
          </View>

        </Surface>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: "100%",
    //marginTop: 32,
  },
  dropdown: {
    paddingHorizontal: 10,
    height: 40,
  },
  welcomeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    alignSelf: "stretch",
    margin: 10
  },
  inputContainer: {
    margin: 10,
    marginBottom: 32
  }
});
