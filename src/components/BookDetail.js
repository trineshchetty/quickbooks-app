import React, {useState } from "react";
import {View,Text, StyleSheet, Image, ScrollView} from "react-native"


function BooksDetail (props)
{
    const [details, setDetails] = useState(props.route.params)
    return (
        <ScrollView style={styles.container}>
            <View style={{flexDirection: "row", alignSelf: "flex-start"}}>
                <Image source={{uri: details.book_image}} style={{width:90, height: 150, borderRadius: 12}}></Image>

                <View style={{flexDirection: "column", alignSelf: "center"}}>
                    <View style={{flexDirection: "row", alignSelf: "center"}}>
                        <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20, fontStyle: "italic"}}>Title:</Text>
                        <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 5}}>{details.title}</Text>
                    </View>

                    <View style={{flexDirection: "row", alignSelf: "center"}}>
                        <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20, fontStyle: "italic"}}>Price:</Text>
                        <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 5}}>{details.price}</Text>
                    </View>

                </View>
            </View>


            <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                <Text style={{marginLeft: 20}}>Additional Information</Text>


                <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20, fontStyle: "italic", marginBottom: 5}}>Description:</Text>
                    <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20}}>{details.description}</Text>
                </View>

                <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20, fontStyle: "italic", marginBottom: 5}}>Author:</Text>
                    <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20}}>{details.author}</Text>
                </View>

                <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20, fontStyle: "italic", marginBottom: 5}}>Publisher:</Text>
                    <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20}}>{details.publisher}</Text>
                </View>

                <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20, fontStyle: "italic", marginBottom: 5}}>Contributor:</Text>
                    <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20}}>{details.contributor}</Text>
                </View>


                <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20, fontStyle: "italic", marginBottom: 5}}>ISBNS:</Text>

                    {
                        details.isbns.map((isbn) => { 
                            return <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20}}>{isbn.isbn10}</Text>
                        })
                    }
                </View>
                <View style={{flexDirection: "column", alignSelf: "flex-start", marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20, fontStyle: "italic", marginBottom: 5}}>Buy Links...</Text>
                    {
                        details.buy_links.map((links) => { 
                            return (
                                <View style={{marginTop: 5, marginBottom: 5}}>
                                    <Text style={{fontSize: 15, fontWeight: "700", color: "#212121", marginLeft: 20}}>{links.name}</Text>
                                    <Text style={{fontSize: 15, fontWeight: "100", color: "#212121", marginLeft: 20}}>{links.url}</Text>
                                </View>
                      
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}
 
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20
    },
})

export default BooksDetail