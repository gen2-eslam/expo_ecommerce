import { router } from "expo-router";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import AnimatedLogo from "../../components/animated_logo";
import { AppBar } from "../../components/app_bar";
import { CustomInput, PasswordInput } from "../../components/custom_input";
import { COLORS } from "../../utils/constants/colors";

const SignUpScreen = () => {
  return (
    <>
      <AppBar title="Sign Up" />
      <View style={styles.container}>
        <AnimatedLogo />

        <Animated.View
          entering={FadeIn.duration(1000).delay(2000).springify()}
          style={{ width: "100%", alignItems: "center" }}
        >
          <Text style={styles.title}>Create an Account</Text>
          <CustomInput
            textInputProps={{
              placeholder: "Full Name",
              keyboardType: "default",
              onChangeText: (text: string) => console.log(text),
            }}
            icon="account-circle-outline"
          />
          <CustomInput
            textInputProps={{
              placeholder: "Email",
              keyboardType: "email-address",
              onChangeText: (text: string) => console.log(text),
            }}
            icon="email-outline"
          />
          <PasswordInput
            placeholder="Password"
            onChangeText={(text: string) => console.log(text)}
          />
          <PasswordInput
            placeholder="Confirm Password"
            onChangeText={(text: string) => console.log(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

export default SignUpScreen;

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
  input: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: "70%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
