import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { AppLoading } from "expo";
import { useFonts } from "expo-font";

export default function Loading() {
  let [fontsLoaded] = useFonts({
    "Titillium-Regular": require("./assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium-Light": require("./assets/fonts/TitilliumWeb-Light.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the fucking weather</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontFamily: "Titillium-Regular",
    color: "#2c2c2c",
    fontSize: 30,
  }, //react native에서는 속성 상속이 안되는 것 기억 ex)container에 텍스트색상지정해도 text에는 적용안됨
});
