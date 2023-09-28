import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './composants/header.jsx';
import CardWeather from './composants/cardWeather.jsx';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [weatherData, setWeatherData] = useState({});

  return (
    <LinearGradient
      colors={['#08244F', '#134CB5', '#0B42AB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Header setWeatherData={setWeatherData} />
      {weatherData ? <CardWeather weatherData={weatherData} /> : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Assurez-vous que le fond est transparent
  },
});
