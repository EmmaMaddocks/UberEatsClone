import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItem";

import { localRestaurants } from "../components/RestaurantItem";
import BottomTabs from "../components/BottomTab";

const YELP_API_KEY =
	"i9TMVcCvE4WyOoCW9mTvpdM8U_ItoPJVyvfO1l-Wl5Z0Ad18IUPGx4lAD3x4V25hbT18EUjIA4EkoKyG4tznQNecznkWx7yyg2f3XiZNjaUAHpRwiZVTqPumL6eoY3Yx";

export default function Home({ navigation }) {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);

	const [city, setCity] = useState("Manchester");

	const [activeTab, setActiveTab] = useState("Delivery");

	const getRestaurantsFromYelp = () => {
		const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpURL, apiOptions).then((res) =>
			res
				.json()
				.then((json) =>
					setRestaurantData(
						json.businesses.filter((business) =>
							business.transactions.includes(activeTab.toLowerCase())
						)
					)
				)
		);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems
					restaurantData={restaurantData}
					navigation={navigation}
				/>
			</ScrollView>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<BottomTabs />
			</View>
		</SafeAreaView>
	);
}
