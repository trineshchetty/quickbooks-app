
import React, {useEffect, useState } from "react";
import {View,Text, StyleSheet, TouchableOpacity, FlatList, StatusBar, Image} from "react-native"
import apiRequest from "../utils/api"

function Books (props)
{
    const [api_info, set_api_info] = useState({})
    const [books, setBooks] = useState([])

    useEffect(() => {
        apiRequest("/svc/books/v3/lists/current/hardcover-fiction.json")
            .then((res) => {
                if (res.data) {
                    setBooks(res.data.results.books)
                    set_api_info(() =>  {
                      return {
                        copyright: res.data.copyright,
                        last_modified: res.data.last_modified,
                        bestsellers_date: res.data.bestsellers_date,
                      }
                    })
                }
            })
            .catch(err => console.log(err))
    }, [])


    function viewMore ({ bookInfo })
    {
        props.navigation.navigate("BookDetails", bookInfo)
    }

    const ViewMoreBtn = function (bookInfo)
    {
        return (
            <TouchableOpacity style={{width: 150, padding: 10, marginTop: 15, borderRadius: 5, backgroundColor: "#F4A460", justifyContent: "center", flexDirection: "row"}}
                onPress={()=>viewMore(bookInfo)}>
                    <Text style={styles.viewMoreStyle}>View More</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>



                <Text style={{flexDirection: 'row', alignSelf: "center", justifyContent: "center", marginTop: 20, fontSize: 16}}>Available Books</Text>
                <FlatList
                    contentContainerStyle={{padding: 20, paddingTop: StatusBar.currentHeight || 42}}
                    data={books}
                    renderItem={({item}) => (
                    
                            <View style={{
                                flexDirection: "row",
                                marginBottom: 20,
                                backgroundColor: "#fff",
                                borderRadius: 12,
                                shadowColor: "#000",
                                shadowOffset: {width: 0, height: 10},
                                shadowOpacity: 1,
                                shadowRadius: 10,
                                elevation: 3
                            }}>
                            
                    
                                <View style={{flexDirection: "row", alignSelf: "center"}}>
                                    <Image source={{uri: item.book_image}} style={{width: 100, height: 150, borderBottomLeftRadius: 12, borderTopLeftRadius: 12}}></Image>

                                    <View style={{flexDirection: "column", alignSelf: "center"}}>
                                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                                            <Text style={{fontSize: 12, fontWeight: "100", color: "#212121", marginLeft: 20, fontStyle: "italic"}}>Title:</Text>
                                            <Text style={{fontSize: 12, fontWeight: "100", color: "#212121", marginLeft: 5, textTransform: "lowercase"}}>{item.title}</Text>
                                        </View>

                                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                                            <Text style={{fontSize: 12, fontWeight: "100", color: "#212121", marginLeft: 20, fontStyle: "italic"}}>Price:</Text>
                                            <Text style={{fontSize: 12, fontWeight: "100", color: "#212121", marginLeft: 5}}>{item.price}</Text>
                                        </View>

                                        <View style={{flexDirection: "row", marginLeft: 20}}>
                                            <ViewMoreBtn bookInfo={item} />
                                        </View>
                                    </View>
                                </View>
                        </View>
                    
                )}
                    keyExtractor={item => item.rank}
                />
                <View style={{flexDirection: "column", margin: 10, marginTop: 20, marginBottom: 20, justifyContent: "center", alignSelf: "center"}}>
                    <Text style={{fontSize: 10, marginRight: 20}}>{api_info.copyright}</Text>
                    <Text style={{fontSize: 10}}>{api_info.last_modified}</Text>
                </View>
            </View> 

    )
}
 
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        paddingTop: 5,
        justifyContent: 'center',
        alignContent: 'center'
    },
    titleText:
    {
        color: "white",
        fontSize: 15,
        margin: 20,
        textTransform: "uppercase"
    },
    listItems:
    {
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#212121',
        flexDirection: "row"
      
    
    },

    viewMoreStyle:
    {
        color: "white",
        fontSize: 15,
        textTransform: "uppercase",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,


    },
    statusMessageStyle:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Books