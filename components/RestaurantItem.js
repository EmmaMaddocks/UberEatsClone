import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
	{
		name: "Beachside Bar",
		image_url:
			"https://images.ctfassets.net/e7lf9n037kdg/6FX4WWrBT5mw6MkVk6TPzU/d1d21036a982dec39fe2855f246f52d7/30.jpg?w=1200&h=675&fl=progressive&q=50&fm=jpg",
		categories: ["Cafe", "Bar"],
		price: "££",
		reviews: 1233,
		rating: 4.5,
		time: "35-45",
	},
	{
		name: "Behinia",
		image_url:
			"https://www.portsmouth.co.uk/webimg/b25lY21zOjU1MGIxOWMyLTM4NGYtNGE5My1iZGU4LWE1MzY5ZDg0MzBhYjo0Njk0ZDdhNS1mNTAwLTQwMGUtOWY0MC00YmU5Y2E1ZjYwMzM=.jpg?width=1200&enable=upscale",
		categories: ["Cafe", "Bar"],
		price: "£",
		reviews: 123,
		rating: 4.1,
		time: "35-45",
	},
	{
		name: "Rozis",
		image_url:
			"https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_uk:cuisines:indian-9.jpg/v1/uk/restaurants/106769.jpg",
		categories: ["Indian", "Restaurant"],
		price: "£££",
		reviews: 1453,
		rating: 4.8,
		time: "30-50",
	},
];

export default function RestaurantItems({ navigation, ...props }) {
	return (
		<>
			{props.restaurantData.map((restaurant, index) => (
				<TouchableOpacity
					key={index}
					onPress={() =>
						navigation.navigate("RestaurantDetail", {
							name: restaurant.name,
							image: restaurant.image_url,
							price: restaurant.price,
							reviews: restaurant.review_count,
							rating: restaurant.rating,
							categories: restaurant.categories,
						})
					}
					activeOpacity={1}
					style={{ marginBottom: 1 }}
				>
					<View style={{ marginTop: 10, padding: 15, backgroundColor: "#eee" }}>
						<RestaurantImage image={restaurant.image_url} />
						<RestaurantInfo
							name={restaurant.name}
							rating={restaurant.rating}
							time={restaurant.time}
						/>
					</View>
				</TouchableOpacity>
			))}
		</>
	);
}

const RestaurantImage = (props) => (
	<>
		<Image
			source={{
				url: props.image,
			}}
			style={{
				width: "100%",
				height: 180,
			}}
		/>
		<TouchableOpacity
			style={{
				position: "absolute",
				right: 20,
				top: 20,
			}}
		>
			<MaterialCommunityIcons name="heart-outline" size={25} color="white" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: "row",
			marginTop: 10,
			justifyContent: "space-between",
			alignItems: "center",
		}}
	>
		<View>
			<Text
				style={{
					fontSize: 15,
					fontWeight: "bold",
				}}
			>
				{props.name}
			</Text>
			<Text
				style={{
					fontSize: 13,
					color: "grey",
				}}
			>
				{props.time} mins
			</Text>
		</View>
		<View
			style={{
				backgroundColor: "white",
				height: 30,
				width: 30,
				alignItems: "center",
				borderRadius: 15,
				justifyContent: "center",
			}}
		>
			<Text>{props.rating}</Text>
		</View>
	</View>
);
