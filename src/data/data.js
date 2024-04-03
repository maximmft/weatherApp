const WeatherData = [
    {
        "city": "London",
        "temperature":  "15°C",
        "temperatureMax": "20°C",
        "temperatureMin": "10°C",
        "sky": "rainy", 
        "humidity": "70%",
        "alert": false
    },
    {
        "city": "Paris",
        "temperature":  "20°C",
        "temperatureMax": "25°C",
        "temperatureMin": "17°C",
        "sky": "cloudy", 
        "humidity": "30%",
        "alert": false
    },
    {
        "city": "New York",
        "temperature":  "25°C",
        "temperatureMax": "27°C",
        "temperatureMin": "23°C",
        "sky": "cloudy", 
        "humidity": "40%",
        "alert": false
    },
    {
        "city": "Hanoi",
        "temperature":  "33°C",
        "temperatureMax": "35°C",
        "temperatureMin": "28°C",
        "sky": "sunny", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Rio de Janeiro",
        "temperature":  "30°C",
        "temperatureMax": "35°C",
        "temperatureMin": "22°C",
        "sky": "sunny", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Tokyo",
        "temperature":  "22°C",
        "temperatureMax": "23°C",
        "temperatureMin": "16°C",
        "sky": "rainy", 
        "humidity": "70%",
        "alert": false
    },
    {
        "city": "Papeete",
        "temperature":  "32°C",
        "temperatureMax": "37°C",
        "temperatureMin": "28°C",
        "sky": "sunny", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Caen",
        "temperature":  "45°C",
        "temperatureMax": "58°C",
        "temperatureMin": "-5°C",
        "sky": "stormy", 
        "humidity": "80%",
        "alert": false
    },
    {
        "city": "Toronto",
        "temperature":  "26°C",
        "temperatureMax": "30°C",
        "temperatureMin": "22°C",
        "sky": "cloudy", 
        "humidity": "40%",
        "alert": false
    },
    {
        "city": "Los Angeles",
        "temperature":  "29°C",
        "temperatureMax": "32°C",
        "temperatureMin": "27°C",
        "sky": "sunny", 
        "humidity": "50%",
        "alert": false
    },
    {
        "city": "Montreal",
        "temperature":  "30°C",
        "temperatureMax": "31°C",
        "temperatureMin": "27°C",
        "sky": "cloudy", 
        "humidity": "50%",
        "alert": false
    },
    {
        "city": "Abidjan",
        "temperature":  "32°C",
        "temperatureMax": "34°C",
        "temperatureMin": "28°C",
        "sky": "sunny", 
        "humidity": "30%",
        "alert": false
    },
    {
        "city": "Dubai",
        "temperature":  "40°C",
        "temperatureMax": "42°C",
        "temperatureMin": "37°C",
        "sky": "sunny", 
        "humidity": "20%",
        "alert": false
    },
    {
        "city": "Buenos Aire",
        "temperature":  "25°C",
        "temperatureMax": "27°C",
        "temperatureMin": "21°C",
        "sky": "cloudy", 
        "humidity": "30%",
        "alert": false
    },
    {
        "city": "Bangkok",
        "temperature":  "33°C",
        "temperatureMax": "36°C",
        "temperatureMin": "29°C",
        "sky": "stormy", 
        "humidity": "70%",
        "alert": true
    },
    {
        "city": "Brasilia",
        "temperature":  "33°C",
        "temperatureMax": "36°C",
        "temperatureMin": "29°C",
        "sky": "sunny", 
        "humidity": "70%",
        "alert": false
    },
    {
        "city": "Madrid",
        "temperature":  "27°C",
        "temperatureMax": "30°C",
        "temperatureMin": "24°C",
        "sky": "cloudy", 
        "humidity": "40%",
        "alert": false
    },
    {
        "city": "Porto",
        "temperature":  "28°C",
        "temperatureMax": "29°C",
        "temperatureMin": "26°C",
        "sky": "rainy", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Toulouse",
        "temperature":  "28°C",
        "temperatureMax": "46°C",
        "temperatureMin": "15°C",
        "sky": "sunny", 
        "humidity": "30%",
        "alert": false
    },
    {
        "city": "Dublin",
        "temperature":  "22°C",
        "temperatureMax": "223°C",
        "temperatureMin": "18°C",
        "sky": "stormy", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Palerme",
        "temperature":  "28°C",
        "temperatureMax": "32°C",
        "temperatureMin": "18°C",
        "sky": "sunny", 
        "humidity": "50%",
        "alert": false
    },
    {
        "city": "Tunis",
        "temperature":  "28°C",
        "temperatureMax": "32°C",
        "temperatureMin": "20°C",
        "sky": "cloudy", 
        "humidity": "50%",
        "alert": false
    },
    {
        "city": "Alger",
        "temperature":  "30°C",
        "temperatureMax": "32°C",
        "temperatureMin": "26°C",
        "sky": "sunny", 
        "humidity": "50%",
        "alert": false
    },
    {
        "city": "Varsovie",
        "temperature":  "22°C",
        "temperatureMax": "24°C",
        "temperatureMin": "19°C",
        "sky": "stormy", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Moscou",
        "temperature":  "20°C",
        "temperatureMax": "24°C",
        "temperatureMin": "16°C",
        "sky": "cloudy", 
        "humidity": "40%",
        "alert": false
    },
    {
        "city": "Oslo",
        "temperature":  "19°C",
        "temperatureMax": "21°C",
        "temperatureMin": "17°C",
        "sky": "sunny", 
        "humidity": "50%",
        "alert": false
    },
    {
        "city": "Rome",
        "temperature":  "27°C",
        "temperatureMax": "28°C",
        "temperatureMin": "21°C",
        "sky": "rainy", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Mexico",
        "temperature":  "28°C",
        "temperatureMax": "30°C",
        "temperatureMin": "24°C",
        "sky": "sunny", 
        "humidity": "40%",
        "alert": false
    },
    {
        "city": "Le Caire",
        "temperature":  "35°C",
        "temperatureMax": "37°C",
        "temperatureMin": "32°C",
        "sky": "sunny", 
        "humidity": "30%",
        "alert": false
    },
    {
        "city": "Le Cap",
        "temperature":  "27°C",
        "temperatureMax": "28°C",
        "temperatureMin": "21°C",
        "sky": "cloudy", 
        "humidity": "40%",
        "alert": false
    },
    {
        "city": "Kaboul",
        "temperature":  "27°C",
        "temperatureMax": "28°C",
        "temperatureMin": "21°C",
        "sky": "sunny", 
        "humidity": "30%",
        "alert": false
    },
    {
        "city": "Séoul",
        "temperature":  "25°C",
        "temperatureMax": "27°C",
        "temperatureMin": "21°C",
        "sky": "rainy", 
        "humidity": "60%",
        "alert": false
    },
    {
        "city": "Phnom Penh",
        "temperature":  "27°C",
        "temperatureMax": "28°C",
        "temperatureMin": "21°C",
        "sky": "stormy", 
        "humidity": "70%",
        "alert": true
    },

]

export default WeatherData;