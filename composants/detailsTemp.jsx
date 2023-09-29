import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsTemp = ({weatherEntry}) => {
  return (
    <View style={[styles.containerOpt, styles.containerOptWithShadow]}>
    <Text style={[styles.text, styles.textOption]}>
      <Image
        resizeMode="contain"
        source={require("../assets/rain.png")}
        style={{ width: 20, height: 20 }}
      ></Image>
      {weatherEntry.pop}%
    </Text>
    <Text style={[styles.text, styles.textOption]}>
      <Image
        resizeMode="contain"
        source={require("../assets/humidity.png")}
        style={{ width: 20, height: 20 }}
      ></Image>{" "}
      {weatherEntry.main.humidity}%{" "}
    </Text>
    <Text style={[styles.text, styles.textOption]}>
      <Image
        resizeMode="contain"
        source={require("../assets/wind.png")}
        style={{ width: 20, height: 20 }}
      ></Image>{" "}
      {weatherEntry.wind.speed} km/h
    </Text>
  </View>
  )
}

export default DetailsTemp

const styles = StyleSheet.create({
    containerOpt: {
        width: 320,
        height: 50,
        marginTop: 20,
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "rgba(0, 16, 38, .3)",
      },
      textOption: {
        color: "rgba(255, 255, 255, 1)",
      },
})