import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { ComponentProps, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../utils/constants/colors";

export const CustomInput = (props: {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  color?: string;
  textInputProps: React.ComponentProps<typeof TextInput>;
}) => {
  return (
    <View style={styles.input}>
      <MaterialCommunityIcons
        name={props.icon}
        size={24}
        color={props.color || COLORS.primary}
      />
      <TextInput style={{ width: "80%" }} {...props.textInputProps} />
    </View>
  );
};

export const PasswordInput = (props: {
  placeholder: string;
  onChangeText: React.ComponentProps<typeof TextInput>["onChangeText"];
}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.input}>
      <MaterialCommunityIcons
        name="lock-outline"
        size={24}
        color={COLORS.primary}
      />
      <TextInput
        placeholder={props.placeholder}
        style={{ width: "80%" }}
        secureTextEntry={showPassword}
        onChangeText={props.onChangeText}
      />
      <FontAwesome6
        name={showPassword ? "eye-slash" : "eye"}
        size={20}
        color="red"
        style={{ marginLeft: "auto" }}
        onPress={() => setShowPassword(!showPassword)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: COLORS.black,
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: "80%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
