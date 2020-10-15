import React from 'react';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, useFonts} from '@expo-google-fonts/nunito';

import Routes from './src/routes'

export default function App() {
  const [fontsLoader] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoader) {
    return null;
  }

  return (
    <Routes />
  );
}


