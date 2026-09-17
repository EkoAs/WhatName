import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme, LogBox } from "react-native"; // <-- 1. TAMBAHKAN LogBox DI SINI

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

// 2. TAMBAHKAN BARIS INI UNTUK MENYEMBUNYIKAN WARNING KUNING
LogBox.ignoreLogs([
  "[Reanimated] Reduced motion setting is enabled on this device.",
]);

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
