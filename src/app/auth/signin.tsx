import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import AnimatedLogo from "../../components/animated_logo";
import { AppBar } from "../../components/app_bar";
import { CustomInput, PasswordInput } from "../../components/custom_input";
import { authApi } from "../../services/networks/auth_api";
import { COLORS } from "../../utils/constants/colors";

type Props = {};

const SignInScreen = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    authApi
      .login({
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AppBar title="Sign In" />
      <View style={styles.container}>
        <AnimatedLogo />

        <Animated.View
          entering={FadeIn.duration(1000).delay(2000).springify()}
          style={{ width: "100%", alignItems: "center" }}
        >
          <Text style={styles.title}>Sign In</Text>

          <CustomInput
            textInputProps={{
              placeholder: "Email",
              keyboardType: "email-address",
              onChangeText: (text: string) => setEmail(text),
            }}
            icon="email-outline"
          />
          <PasswordInput
            placeholder="Password"
            onChangeText={(text: string) => setPassword(text)}
          />
          <Link href="/auth/forget_password" asChild>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                alignSelf: "flex-end",
                marginRight: "10%",
              }}
            >
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn()}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

export default SignInScreen;

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
