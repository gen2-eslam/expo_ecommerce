import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import AnimatedLogo from "../../components/animated_logo";
import { AppBar } from "../../components/app_bar";
import { COLORS } from "../../utils/constants/colors";

type Props = {};

const VerifyCodeScreen = (props: Props) => {
  return (
    <>
      <AppBar title="Verify Code" />
      <View style={styles.container}>
        <AnimatedLogo />

        <Animated.View
          entering={FadeIn.duration(1000).delay(2000).springify()}
          style={{ width: "100%", alignItems: "center" }}
        >
          <Text style={styles.title}>Verify Code</Text>

          <FlatList
            data={[1, 2, 3, 4]}
            numColumns={4}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TextInput
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text: string) => console.log(text)}
              />
            )}
            columnWrapperStyle={{
              justifyContent: "space-between",
              gap: 10,
              paddingHorizontal: 10,
            }}
            keyExtractor={(item) => item.toString()}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/auth/reset_password")}
          >
            <Text style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: COLORS.black,
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    marginTop: 20,
    paddingHorizontal: 18,
    width: "80%",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    width: "15%",
    textAlign: "center",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
