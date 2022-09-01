import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import Lottie from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
const HomePage = ({ navigation }) => {
    const animationProgress = useRef(new Animated.Value(0))
    console.log("animation progress",animationProgress)
    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(({ finished }) => {
            navigation.navigate("Pokedex")
            /* completion callback */
          });
        // setTimeout(() => navigation.navigate("Pokedex"), 5000)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Lottie source={require('../lotti/pikachu.json')} autoPlay progress={animationProgress.current}></Lottie>
        </View>
    )
}
export default HomePage