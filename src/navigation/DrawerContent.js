import * as React from "react"
import {View,  StyleSheet} from "react-native"
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer"
import {Avatar, Title, Caption,  Drawer } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"



export function DrawerContent ({navigation})
{
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: "row", marginTop: 15}}>
                            <Avatar.Image source={{uri: "https://ingstono.sirv.com/DashImages/trinesh.jpeg"}} size={50} />
                            <View style={{marginLeft: 15, flexDirection: "column"}}>
                                <Title style={styles.title}>Trinesh</Title>
                                <Caption style={styles.caption}>@trinesh</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={(iconProp) => (
                                <MaterialCommunityIcons.Button
                                    name="home-outline"
                                    color={iconProp.color}
                                    size={iconProp.size}
                                    backgroundColor={"transparent"}
                                    underlayColor={"transparent"}
                                />
                            )}
                            label="Home"
                            onPress={() => navigation.navigate("Home")}
                        />
                        <DrawerItem 
                            icon={(iconProp) => (
                                <MaterialCommunityIcons.Button
                                    name="book-open"
                                    color={iconProp.color}
                                    size={iconProp.size}
                                    backgroundColor={"transparent"}
                                    underlayColor={"transparent"}
                                />
                            )}
                            label="Books"
                            onPress={() => navigation.navigate("Books")}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
           
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent:
    {
        flex: 1
    },
    userInfoSection:
    {
        paddingLeft: 20,
    },
    title:
    {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption:
    {
        fontSize: 14,
        lineHeight: 14
    },
    row:
    {
        marginTop: 20,
        flexDirection:  "row",
        alignItems: "center"
    },
    section:
    {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph:
    {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection:
    {
        marginTop: 15
    },
    bottomDrawerSection:
    {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preferences:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "12",
        paddingHorizontal: "16"
    }
})
