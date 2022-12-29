import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
	{
		image: require("../assets/images/shopping-bag.png"),
		text: "Fast Food",
	},
	{
		image: require("../assets/images/soft-drink.png"),
		text: "Indian",
	},
	{
		image: require("../assets/images/deals.png"),
		text: "Chinese",
	},
	{
		image: require("../assets/images/coffee.png"),
		text: "Pizza",
	},
	{
		image: require("../assets/images/desserts.png"),
		text: "Turkish",
	},
	{
		image: require("../assets/images/fast-food.png"),
		text: "Fish & Chips",
	},
	{
		image: require("../assets/images/bread.png"),
		text: "Greek",
	},
];

export default function Categories() {
	return (
		<View
			style={{
				backgroundColor: "white",
				paddingVertical: 10,
				paddingLeft: 20,
			}}
		>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((item, index) => (
					<View key={index} style={{ alignItems: "center", marginRight: 30 }}>
						<Image
							source={item.image}
							style={{
								width: 50,
								height: 40,
								resizeMode: "container",
							}}
						/>
						<Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
