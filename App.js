import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { I18nextProvider } from 'react-i18next'
import i18n from './localization/i18n'
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-native-paper-dropdown"
import LANGUAGES from "./localization/languages"
import { PaperProvider, Surface, Button, TextInput } from 'react-native-paper'
import AsyncStorage  from "@react-native-async-storage/async-storage"

export default function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState({
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
});
  const changeLanguage = async (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    await AsyncStorage.setItem("language", lng)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime({
        date: new Date().toLocaleDateString(), // Update the date
        time: new Date().toLocaleTimeString(), // Update the time
      });
    }, 1000);
  
    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <PaperProvider>
        <View style={{ flex: 1 }}>
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
  <Text>{currentDateTime.date}</Text> {/* Display the current date */}
  <Text>{currentDateTime.time}</Text> {/* Display the current time */}
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
        </View>

      </PaperProvider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 50,
    
    

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
    marginBottom: 30
  }
});
