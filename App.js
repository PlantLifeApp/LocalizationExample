// App.js
import React, { useState, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n, { i18nInit } from './localization/i18n'
import AppContent from './AppContent'
import { View, Text } from 'react-native'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    i18nInit.then(() => setIsReady(true))
  }, [])

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  )
}