import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loadPokemon } from "../redux/actions/PokemonAction";
import { View, Text, Image, FlatList, TouchableHighlight, TextInput, ActivityIndicator } from "react-native";
import Lottie from "lottie-react-native"

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};
var timerId;
const LandingPage = ({ navigation }) => {

    // const throttlefunction = (e) => {
    //     // console.log("throttle functiion")
    //     // console.log("timer befire",timerId)
    //     if (timerId) {
    //         // console.log("if ", timerId)
    //         return

    //     }
    //     // console.log("out", timerId)
    //     timerId = setTimeout(() => {
    //         filterData(e)
    //         // console.log("out after", timerId)
    //         timerId = undefined;
    //         // console.log("out undefin", timerId)
    //     }, 1000)
    //     // console.log(timerId)
    // }
    const filterData = (e) => {
        // console.log(e, "Throtle")
        setFilteredPokemon(pokemonListData.pokemonList.filter(
            pokemon => pokemon.name.toLowerCase().includes(e.toLowerCase())
        ))
        setIsLoading(false)
    }
    const [searchQuery, setSearchQuery] = useState("")
    const [debounceTimeout, setDebounceTimeout] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const pokemonListData = useSelector(state => state.PokemonReducer)
    const [filteredPokemon, setFilteredPokemon] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPokemon())
        console.log(pokemonListData)
        setIsLoading(pokemonListData.isLoading)
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>
            {!pokemonListData?.error ? <View style={{ flex: 1 }}>
                <View style={{ margin: 10 }}>
                    <TextInput value={searchQuery} onChangeText={(e) => {
                        setSearchQuery(e)
                        setIsLoading(true)
                        // throttlefunction(e)
                        if (debounceTimeout)
                            clearTimeout(debounceTimeout)
                        setDebounceTimeout(setTimeout(() => { filterData(e) }, 2000))
                    }} style={{ borderColor: "#6b6a66", backgroundColor: "#6b6a66", borderWidth: 1, borderRadius: 10, color: "#fff" }} placeholderTextColor="#fff" placeholder="Search for Pokemon"
                    />
                </View>
                {!isLoading && searchQuery?.length && !filteredPokemon?.length ? <View>
                    <Text style={{ color: "#fff" }}>The pokemon you have searched is unavailable</Text>
                </View> : <></>}
                {isLoading && <ActivityIndicator size="large"></ActivityIndicator>}
                {!isLoading && (searchQuery.length || filteredPokemon) && <FlatList style={{ backgroundColor: "#000", alignSelf: "center" }} numColumns={2}
                    data={searchQuery?.length <= 0 ? pokemonListData?.pokemonList : filteredPokemon}
                    renderItem={(item) => {
                        let imgIndex = item?.item?.url?.split("/")[6]
                        let imgurl;
                        if (imgIndex < 10) {
                            imgurl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"
                        }
                        else {
                            imgurl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"
                        }
                        return <TouchableHighlight onPress={() => {
                            navigation.navigate("PokemonComponent", { propsdata: { imgurl: imgurl + imgIndex + ".png", apidata: item.item.url } })
                            if (debounceTimeout) {
                                clearTimeout(debounceTimeout);
                            }
                        }}>
                            <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", margin: 10, borderRadius: 10, backgroundColor: generateColor() }}>
                                <Image key={item?.index} source={{ uri: imgurl + imgIndex + ".png" }} style={{ width: 180, height: 180 }}></Image>
                                <Text style={{ color: "#fff", fontSize: 19, fontWeight: "700" }}>{item?.item?.name}</Text>
                            </View>
                        </TouchableHighlight>
                    }} >
                </FlatList>}
            </View>
                : <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <Lottie style={{ height: 200 }} source={require('../lotti/error-2.json')}></Lottie>
                    <Text style={{ flex: 1, fontSize: 30 }}>The server responded with 404 Error</Text>
                </View>}
        </View>
    )
}
export default LandingPage