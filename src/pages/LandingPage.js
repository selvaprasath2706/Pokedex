import React from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
// const imgurl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"
const data = {
    count: 1154,
    next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    previous: null,
    results: [
        {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            name: "venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            name: "charmander",
            url: "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            name: "charmeleon",
            url: "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            name: "charizard",
            url: "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            name: "squirtle",
            url: "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            name: "wartortle",
            url: "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            name: "blastoise",
            url: "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            name: "caterpie",
            url: "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            name: "metapod",
            url: "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            name: "butterfree",
            url: "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            name: "weedle",
            url: "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            name: "kakuna",
            url: "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            name: "beedrill",
            url: "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            name: "pidgey",
            url: "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            name: "pidgeotto",
            url: "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            name: "pidgeot",
            url: "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            name: "rattata",
            url: "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            name: "raticate",
            url: "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}
const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};

const LandingPage = () => {
    return (
        // <ScrollView>
        <FlatList style={{ backgroundColor: "#000" }} numColumns={2}
            data={data.results}
            renderItem={(item) => {
                var imgurl;
                var imgIndex = item.index + 1;
                // console.log(item.index)
                if (item.index < 9) {
                    imgurl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"
                }
                else {
                    imgurl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"
                }
                return <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", margin: 8, borderRadius: 10, backgroundColor: generateColor() }}>
                    <Image key={item.index} source={{ uri: imgurl + imgIndex + ".png" }} style={{ width: 200, height: 200 }}></Image>
                    <Text style={{color:"#fff",fontSize:14}}>{item.item.name}</Text>
                </View>
            }} >
        </FlatList>

        // </ScrollView>
    )
    {/* {data.results.map((pokemons, index) => {
                return (
                    // <View key={index} style={{flex:1}}>
                        <Image key={index} source={{ uri: imgurl + index + ".png" }} style={{ width: 100, height: 100 }}></Image>
                    // </View>
                    )
            })} */}


}
export default LandingPage