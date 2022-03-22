import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {DrawerContent} from "./DrawerContent"

import {MaterialIcons} from "@expo/vector-icons"


// Components

import Books from "../screens/Books"
import BookDetails from "../components/BookDetail"
import Home from "../screens/Home"



const Drawer = createDrawerNavigator()
const BookStack = createStackNavigator()



const burgerMenuBackgroundColor = "#B5D88C"



const BooksScreenStack = function ({navigation})
{
    return (
        <BookStack.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: burgerMenuBackgroundColor}, headerTintColor: "#fff", headerTitleStyle: {fontWeight: "normal"}, headerTitleAlign: "center"}}>
             <BookStack.Screen name="Home" component={Home} options={{title: "Home",
                headerLeft: () => (
                        <MaterialIcons.Button name="menu" size={25} backgroundColor={burgerMenuBackgroundColor} onPress={() => navigation.openDrawer()}/>
                )}}></BookStack.Screen>
            
            <BookStack.Screen name="Books" component={Books} options={{title: "Books",
                headerLeft: () => (
                        <MaterialIcons.Button name="menu" size={25} backgroundColor={burgerMenuBackgroundColor} onPress={() => navigation.openDrawer()}/>
                )}}></BookStack.Screen>

            <BookStack.Screen name="BookDetails" component={BookDetails} options={{title: "Book Details",
                headerLeft: () => (
                        <MaterialIcons.Button name="menu" size={25} backgroundColor={burgerMenuBackgroundColor} onPress={() => navigation.openDrawer()}/>
                )}}></BookStack.Screen>
        </BookStack.Navigator>
    )
}

const Routes = function ()
{
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Main" component={BooksScreenStack} options={{swipeEnabled: false}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}



export default Routes