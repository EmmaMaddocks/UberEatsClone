import { View, Text } from "react-native";
import React from "react";
import About from "../components/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/MenuItems";
import ViewCart from "../components/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
	return (
		<View>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItem route={route} restaurantName={route.params.name} />
			<ViewCart navigation={navigation} restaurantName={route.params.name} />
		</View>
	);
}
