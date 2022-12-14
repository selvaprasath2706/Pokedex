import React, { useEffect } from "react";
import { Image, ScrollView, Text, View, ActivityIndicator } from "react-native";
import { loadPokemonData } from "../redux/actions/PokemonAction";
import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import Lottie from "lottie-react-native"
// import PokemonComponent from './pages/PokemonComp';

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};
const PokemonComponent = ({ route }) => {
    // console.log()
    const { imgurl, apidata } = route.params.propsdata
    const pokemonData = useSelector(state => state.PokemonDataReducer)
    // console.log("pokmon data", pokemonData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPokemonData(apidata))
    }, [])
    console.log(pokemonData.isLoading)
    return (

        < View style={{ flex: 1 }}>
            {
                pokemonData?.isLoading ? <Lottie source={require('../lotti/pikachu.json')} autoPlay ></Lottie> :
                    // <ActivityIndicator></ActivityIndicator> :
                    pokemonData?.pokemonData?.abilities && !pokemonData?.error ? <View style={{ backgroundColor: "#000", flex: 1 }}>
                        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: generateColor(), borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                            <Image source={{ uri: imgurl }} style={{ height: 200, width: 200 }}>
                            </Image>
                        </View>
                        <View>
                            <Text style={{ alignSelf: "center", fontSize: 23, color: "#fff", fontWeight: "bold", marginVertical: 3 }}>{pokemonData.pokemonData.species.name}</Text>
                            <View style={{ flexDirection: "row",alignItems: "center"}}>
                                <Text style={{ marginLeft:10,color: "#fff",fontSize:17 }}>Types:</Text>
                                <View style={{ flex:1,flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                                    {pokemonData?.pokemonData?.types?.map((item) => {
                                        return (
                                            <View key={item.slot} style={{ backgroundColor: generateColor(), borderColor: "#000", borderWidth: 1, borderRadius: 10, paddingLeft: 10, paddingRight: 10 }}>
                                                <Text key={item.type.name} style={{ marginHorizontal: 10, marginVertical: 2, color: "#fff",fontSize:17  }}>{item.type.name}</Text>
                                            </View>
                                        )
                                    })}
                                </View>

                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: 10, padding: 10 }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 21 }}>{pokemonData?.pokemonData?.weight} Kg</Text>
                                    <Text style={{ color: "#fff" }}>Weight</Text>
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 21 }}>{pokemonData?.pokemonData?.height} M</Text>
                                    <Text style={{ color: "#fff" }}>Height</Text>
                                </View>
                            </View>

                            {/* <CircularProgress
                    value={100}
                    maxValue={25}
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                /> */}
                            {/* <View>
                    <CircularProgress
                        value={60}
                        radius={120}
                        duration={2000}
                        progressValueColor={'#ecf0f1'}
                        maxValue={200}
                        title={'KM/H'}
                        titleColor={'white'}
                        titleStyle={{ fontWeight: 'bold' }}
                    />
                </View> */}
                            {/* <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={10000}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" /> */}
                            {/* <CircularProgress
                    value={300}
                    radius={60}
                    duration={8000}
                    progressValueColor={'#ecf0f1'}
                    maxValue={300}
                    title={'KM/H'}
                    titleColor={'white'}
                    titleStyle={{ fontWeight: 'bold' }}
                /> */}



                            {/* <CircularProgress
                    value={97}
                    radius={120}
                    inActiveStrokeOpacity={0.5}
                    activeStrokeWidth={15}
                    inActiveStrokeWidth={20}
                    progressValueStyle={{ fontWeight: '100', color: 'white' }}
                    activeStrokeSecondaryColor="yellow"
                    inActiveStrokeColor="black"
                    duration={1000}
                    dashedStrokeConfig={{
                        count: 50,
                        width: 4,
                    }}
                /> */}
                        </View>
                        {/* <View style={{backgroundColor:"white",flexDirection:"row"}}>
                    {data.stats.map((item,index) => {
                       return <View key={index}>
                        <CircularProgress
                        key={index}
                            value={item.base_stat}
                            maxValue={100}
                            // radius={60}
                            title={item.stat.name}
                            titleColor={'white'}
                            activeStrokeColror={'#2465FD'}
                            activeStrokeSecondaryColor={'#C25AFF'}
                        />
                       </View>

                    })}
                </View> */}

                        <View style={{ justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ color: "#fff", margin: 10 }}>Base stats</Text>
                            <FlatList
                                horizontal
                                // numColumns={3}
                                data={pokemonData.pokemonData.stats}
                                renderItem={(item) => {
                                    return <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                                        <CircularProgress
                                            value={item.item.base_stat}
                                            maxValue={100}
                                            radius={40}
                                            // title={item.item.stat.name}
                                            titleColor={'white'}
                                            activeStrokeColror={'#2465FD'}
                                            activeStrokeSecondaryColor={'#C25AFF'}
                                        />
                                        <Text style={{ color: "#fff" }}>{item.item.stat.name}</Text>
                                    </View>
                                }}>

                            </FlatList>
                        </View>
                    </View> :
                        <View style={{ flex: 1, alignSelf: "center" }}>
                            <Lottie style={{ height: 150, alignSelf: "center" }} source={require('../lotti/error.json')}></Lottie>
                            <Text style={{ flex: 1, fontSize: 30 }}>The server responded with 404 Error</Text>
                        </View>
            }

        </View >

    )
}
export default PokemonComponent