export async function fetchWeatherData(city, countryCode) {
    const apiKey = "04fb068bc37a2a020a85d64c72fa2b51";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Réponse de l'API non valide");
      }
  
      const data = await response.json();
  
     
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  