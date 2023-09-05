import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { useCallback, useEffect, useState } from 'react';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index'
import { Layout } from './src/layout';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && (fontsLoaded || fontError)) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady, fontsLoaded, fontError]);

  useEffect(() => {
    async function prepare() {
      try {
        // If I have something to load before APP starts, then i do it here!

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady || (!fontsLoaded && !fontError)) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' backgroundColor="transparent" translucent />

      <Layout onLayout={onLayoutRootView} />
    </ThemeProvider>
  );
}
