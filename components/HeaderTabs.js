import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs(props) {
	return (
		<View style={{ flexDirection: "row", alignSelf: "center" }}>
			<HeaderButton
				text="Delivery"
				btnColor="pink"
				textColor="white"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>

			<HeaderButton
				text="Pickup"
				btnColor="white"
				textColor="pink"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
		</View>
	);
}

const HeaderButton = (props) => (
	<TouchableOpacity
		style={{
			backgroundColor: props.activeTab === props.text ? "pink" : "white",
			paddingVertical: 6,
			paddingHorizontal: 16,
			borderRadius: 30,
		}}
		onPress={() => {
			props.setActiveTab(props.text);
		}}
	>
		<Text
			style={{
				color: props.activeTab === props.text ? "white" : "pink",
				fontSize: 15,
				fontWeight: "500",
			}}
		>
			{props.text}
		</Text>
	</TouchableOpacity>
);
