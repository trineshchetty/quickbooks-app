import React from "react";
import {View,Text, StyleSheet, TouchableOpacity} from "react-native"

function Home (props)
{
    return (
        <View style={styles.container}>
            <Text>This is a simple React Native Expo Book App. It shows latest books available at different online stores</Text> 
            <TouchableOpacity style={{backgroundColor: "orange", borderRadius: 20, padding: 10, marginTop: 20}} onPress={() => props.navigation.push("Books")}>
                <Text style={{color: "white", fontSize: 12}}>To view click here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: "center"
    },
})

export default Home