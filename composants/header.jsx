import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { fetchWeatherData } from "../api/weatherApi";

const Header = ({ setWeatherData }) => {
  const [ville, setVille] = useState("Montcuq");

  const onChangeText = (text) => {
    setVille(text);
  };

  const onButtonPress = () => {
    const cityName = ville;
    fetchData(cityName);
  };

  const fetchData = (cityName) => {
    fetchWeatherData(cityName, "FR")
      .then((data) => {
        setWeatherData(data);
        console.log("Données météorologiques :", data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données météorologiques :",
          error
        );
      });
  };

  return (
    <View style={styles.head}>
      <View style={{ flexDirection: "row", alignItems: "stretch" }}>
        <Image
          resizeMode="contain"
          source={require("../assets/Frame.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
        <TextInput
          style={[styles.text, styles.input]}
          onChangeText={onChangeText}
          value={ville}
          placeholder="Entrer ville"
          placeholderTextColor={"#fff"}
          onSubmitEditing={onButtonPress} 
        />
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Image
            resizeMode="contain"
            source={require("../assets/opt.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    color: "#ffff",
  },
  input: {
    textDecorationColor: "#ffff",
    height: 40,
    width: "auto",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  head: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
  },
});
