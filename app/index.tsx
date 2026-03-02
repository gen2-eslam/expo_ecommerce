import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack } from "expo-router";
import React, { Fragment } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { COLORS } from "../constants/colors";
import { IMAGES } from "../constants/images";
type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={IMAGES.ecommerceSplash}
        style={{ flex: 1 }}
        contentFit="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255,255,255,0.9)",
              "rgba(255,255,255,1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Header />
              <LoginButton title="Continue With Email" icon="mail-outline" />
              <LoginButton title="Continue With Google" icon="logo-google" />
              <LoginButton
                title="Continue With Facebook"
                icon="logo-facebook"
              />
              <Text>
                Already have an account?{" "}
                <Link href="/signin">
                  <Text style={styles.loginTextspan}>Sign In</Text>
                </Link>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

const Header = () => {
  return (
    <Fragment key="header" >
      <Animated.Text
        style={styles.title}
        entering={FadeInRight.delay(300).springify(300)}
      >
        Gold D Gin
      </Animated.Text>
      <Animated.Text
        style={styles.description}
        entering={FadeInLeft.delay(300).springify(300)}
      >
        One Stop Solution For All Your Needs
      </Animated.Text>
    </Fragment>
  );
};

const LoginButton = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Animated.View
      style={styles.socialLoginWrapper}
      entering={FadeInUp.delay(300).springify(300)}
    >
      <Link href="/signup" asChild>
        <TouchableOpacity style={styles.button}>
          <Ionicons name={icon} size={20} color={COLORS.black} />
          <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 5,
    letterSpacing: 2.4,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.gray,
    lineHeight: 30,
    marginBottom: 20,
    letterSpacing: 1.2,
  },
  socialLoginWrapper: {
    width: "100%",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: COLORS.gray,
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
  btnText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "600",
  },
  loginTextspan: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});
//iOS-only support:
//Limited customization
//react-native-safe-area-context