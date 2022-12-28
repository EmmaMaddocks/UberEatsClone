import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
	name: "test",
	image:
		"https://images.ctfassets.net/e7lf9n037kdg/6FX4WWrBT5mw6MkVk6TPzU/d1d21036a982dec39fe2855f246f52d7/30.jpg?w=1200&h=675&fl=progressive&q=50&fm=jpg",
	price: "£14.54",
	reviews: "343",
	rating: "4.5",
	categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

export default function About(props) {
	const { name, image, price, reviews, rating, categories } =
		props.route.params;

	const formattedCategories = categories.map((cat) => cat.title).join(" | ");

	const description = `${formattedCategories} ${
		price ? " | " + price : ""
	} | ${rating} | ${reviews} `;

	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantTitle name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
}

const RestaurantImage = (props) => (
	<Image source={{ url: props.image }} style={{ width: "100%", height: 230 }} />
);

const RestaurantTitle = (props) => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "600",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.name}
	</Text>
);

const RestaurantDescription = (props) => (
	<Text
		style={{
			fontSize: 15,
			fontWeight: "400",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.description}
	</Text>
);
