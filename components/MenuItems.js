import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import cartReducer from "../reducx/reducers/cartReducer";

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},

	titleStyle: {
		fontSize: 19,
		fontWeight: "600",
	},
});

export const foods = [
	{
		title: "Lasagne",
		description: "test",
		price: "£14.50",
		image_url:
			"https://images.ctfassets.net/e7lf9n037kdg/6FX4WWrBT5mw6MkVk6TPzU/d1d21036a982dec39fe2855f246f52d7/30.jpg?w=1200&h=675&fl=progressive&q=50&fm=jpg",
	},
	{
		title: "Beef",
		description: "test",
		price: "£11.50",
		image_url:
			"https://images.ctfassets.net/e7lf9n037kdg/6FX4WWrBT5mw6MkVk6TPzU/d1d21036a982dec39fe2855f246f52d7/30.jpg?w=1200&h=675&fl=progressive&q=50&fm=jpg",
	},
	{
		title: "Pasta",
		description: "test",
		price: "£10.50",
		image_url:
			"https://images.ctfassets.net/e7lf9n037kdg/6FX4WWrBT5mw6MkVk6TPzU/d1d21036a982dec39fe2855f246f52d7/30.jpg?w=1200&h=675&fl=progressive&q=50&fm=jpg",
	},
];

export default function MenuItem({ restaurantName }) {
	const dispatch = useDispatch();

	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				...item,
				restaurantName: restaurantName,
				checkboxValue: checkboxValue,
			},
		});

	const cartItems = useSelector(
		(state) => state.cartReducer.selectedItems.items
	);

	const isFoodinCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title === food.title));

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods.map((food, index) => (
				<View key={index} style={styles.menuItemStyle}>
					<BouncyCheckbox
						iconStyle={{ borderColor: "lightgray" }}
						fillColor="green"
						isChecked={isFoodinCart(food, cartItems)}
						onPress={(checkboxValue) => selectItem(food, checkboxValue)}
					/>
					<FoodInfo food={food} />
					<ItemImage food={food} />
				</View>
			))}
		</ScrollView>
	);
}

const FoodInfo = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text styles={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const ItemImage = (props) => (
	<View>
		<Image
			source={{ url: props.food.image_url }}
			style={{ width: 100, height: 100, borderRadius: 12 }}
		/>
	</View>
);
