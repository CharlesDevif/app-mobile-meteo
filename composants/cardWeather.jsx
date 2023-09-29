// cardWeather.jsx

import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import * as Font from "expo-font";
import {
  convertKelvinToCelsius,
  formatDate,
  formatDateDay,
  formatDateHour,
  isToday,
  isTomorrow,
} from "../functions/functions";
import CardTempDay from "./cardTempDay";
import DetailsTemp from "./detailsTemp";

const CardWeather = ({ weatherData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Assurez-vous de vérifier si weatherData est défini avant d'accéder à ses propriétés
  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return null; // Si weatherData n'est pas défini ou ne contient pas de données, ne rien afficher
  }

  // Supposons que vous souhaitiez afficher les informations de la première entrée dans la liste
  const firstWeatherEntry = weatherData.list[selectedIndex];

  return (
    <View style={[styles.containerCard, styles.bottomBorder]}>
      <View>
        {firstWeatherEntry.weather[0].main === "Clouds" ? (
          <Image
            resizeMode="contain"
            source={require("../assets/pluies.png")}
            style={{ width: 190, height: 190 }}
          ></Image>
        ) : (
          <Image
            resizeMode="contain"
            source={require("../assets/beau-temps.png")}
            style={{ width: 190, height: 190 }}
          ></Image>
        )}
      </View>
      <Text style={[styles.text, styles.textTemp]}>
        {convertKelvinToCelsius(firstWeatherEntry.main.temp)}°C
      </Text>
      <Text style={[styles.text, styles.textDay]}>
        {formatDate(firstWeatherEntry.dt_txt)}
      </Text>

      <DetailsTemp weatherEntry={firstWeatherEntry}></DetailsTemp>

      <View style={[styles.containerTempDay]}>
        <Text style={[styles.text, styles.textDay]}>
          {isToday(firstWeatherEntry.dt_txt)
            ? "Aujourd'hui " + formatDateDay(firstWeatherEntry.dt_txt)
            : isTomorrow(firstWeatherEntry.dt_txt)
            ? "Demain " + formatDateDay(firstWeatherEntry.dt_txt)
            : formatDateDay(firstWeatherEntry.dt_txt)}
        </Text>
        <View style={[styles.TempDayFlex]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {weatherData.list.slice(0, 10).map((entry, indexMap) => (
              <CardTempDay
                key={indexMap}
                weatherData={weatherData}
                index={indexMap}
                onPress={() => setSelectedIndex(indexMap)}
                isActive={indexMap === selectedIndex} // Passer une prop isActive pour indiquer si la carte est active
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },
  textTemp: {
    fontSize: 50,
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
    backgroundColor: "aqua",
    borderRadius: 12,
  },
});

export default CardWeather;
