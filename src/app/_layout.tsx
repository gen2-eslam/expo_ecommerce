import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  //SpaceMono-Regular.ttf

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="flat_list">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="flat_list" options={{ presentation: "pageSheet" }} />
      <Stack.Screen
        name="auth/signin"
        options={{ presentation: "pageSheet" }}
      />
      <Stack.Screen
        name="auth/signup"
        options={{ presentation: "pageSheet" }}
      />
      <Stack.Screen
        name="auth/forget_password"
        options={{ presentation: "pageSheet" }}
      />
      <Stack.Screen
        name="auth/verify_code"
        options={{ presentation: "pageSheet" }}
      />
    </Stack>
  );
}
