
import React from "react";

import { MaterialIcons } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home"
import Books from "../screens/Books"
import BooksDetail from "../components/BookDetail"


const DrawerStack = createStackNavigator()



const headerBackgroundColor = "#B5D88C"
const burgerMenuBackgroundColor = "#B5D88C"


const HomeStackScreen = function (props)
{
	return (
		<DrawerStack.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: headerBackgroundColor}, headerTintColor: "#fff", headerTitleStyle: {fontWeight: "normal"}, headerTitleAlign: "center"}}>

			<DrawerStack.Screen name="Home" component={Home} options={{
				title: "Home",

				headerLeft: () => (
					<MaterialIcons.Button name="menu" size={25} backgroundColor={burgerMenuBackgroundColor} onPress={() => props.navigation.openDrawer()}/>
				)
			}}
		/>
		</DrawerStack.Navigator>
	)
}


const Books = function ({navigation})
{
	return (
		<DrawerStack.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: headerBackgroundColor}, headerTintColor: "#fff", headerTitleStyle: {fontWeight: "normal"}, headerTitleAlign: "center"}}>
			<DrawerStack.Screen name="Books" component={Books} options={{
				title: "Books",
				headerLeft: () => (
					<MaterialIcons.Button name="menu" size={25} backgroundColor={headerBackgroundColor} onPress={() => navigation.openDrawer()}/>
				)
			}}
		/>
		</DrawerStack.Navigator>
	)
}


const BooksDetail = function ({navigation})
{
	return (
		<DrawerStack.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: headerBackgroundColor}, headerTintColor: "#fff", headerTitleStyle: {fontWeight: "normal"}, headerTitleAlign: "center"}}>
			<DrawerStack.Screen name="Books" component={BooksDetail} options={{
				title: "BooksDetail",
				headerLeft: () => (
					<MaterialIcons.Button name="menu" size={25} backgroundColor={headerBackgroundColor} onPress={() => navigation.openDrawer()}/>
				)
			}}
		/>
		</DrawerStack.Navigator>
	)
}

export default {
	HomeStackScreen,
    Books,
    BooksDetail
}