import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { convertKelvinToCelsius, formatDateHour } from "../functions/functions";

const CardTempDay = ({ weatherData, index, onPress,isActive  }) => {
  const WeatherEntry = weatherData.list[index];
  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <View
        style={[
          styles.TempDay,
          isActive && styles.activeTempDay, // Appliquer un style actif si isActive est vrai
        ]}
      >
        <Text style={[styles.text]}>
          {convertKelvinToCelsius(WeatherEntry.main.temp)}°C
        </Text>
        {WeatherEntry.weather[0].main === "Clouds" ? (
          <Image
            resizeMode="contain"
            source={require("../assets/pluies.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        ) : (
          <Image
            resizeMode="contain"
            source={require("../assets/beau-temps.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        )}
        <Text style={[styles.text, styles.textDay]}>
          {formatDateHour(WeatherEntry.dt_txt)}.00
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTempDay;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#fff",
  },
  containerTempDay: {
    width: 320,
    height: 190,
    marginTop: 20,
    padding: 12,
    borderRadius: 20,
    backgroundColor: "rgba(0, 16, 38, .3)",
    
  },
  TempDayFlex: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  TempDay: {
    justifyContent: "space-around",
    alignItems: "center",
    width: 60,
    height: 130,
    marginTop: 13,
    marginRight: 15,
    
  },
  activeTempDay: {
    borderWidth: 1.2,
    borderRadius: 12,
    borderColor: "#5096FF",
    backgroundColor: "rgba(37, 102, 163, 0.20)",
  },
});
