import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Lottie from 'lottie-react-native';

const HomePage = ({ navigation }) => {
    useEffect(() => {
        setTimeout(()=> navigation.navigate("Pokedex"),2000)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Lottie source={require('../lotti/pikachu.json')} autoPlay ></Lottie>
        </View>
    )
}
export default HomePage