import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { NativeWindStyleSheet } from 'nativewind';
import { db } from '@/data/database';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../../data/migrations/migrations';
import { View, Text } from 'react-native';

/**
 * TODO: Periodically check for updates
 * required for nativewind v2 to work in web
 * ? https://github.com/marklawlor/nativewind/issues/470#issuecomment-1589092569
 */
NativeWindStyleSheet.setOutput({
  default: 'native',
});

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, err] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Mocaroni: require('../assets/fonts/Mocaroni.ttf'),
    ...FontAwesome.font,
  });

  const { success, error } = useMigrations(db, migrations);

  useEffect(() => {
    if (err) throw err;
  }, [err]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
