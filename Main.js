import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Horoscope from './screens/HoroscopeScreen';
import Joke from './screens/JokeScreen';
import TopNews from './screens/TopNewsScreen';
import Weather from './screens/WeatherScreen';

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Joke" component={Joke} />
            <Stack.Screen name="TopNews" component={TopNews} />
            <Stack.Screen name="Horoscope" component={Horoscope} />
            <Stack.Screen name="Weather" component={Weather} />
        </Stack.Navigator>
    );
}