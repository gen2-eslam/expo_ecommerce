import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { TouchableOpacity } from "react-native";

export const AppBar = ({title}: {title: string}) => {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title: title,
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "white" },
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          );
        },
      }}
    />
  );
};
