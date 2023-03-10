import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderItem from "./OrderItem";
import firebase from "../firebase";

export default function ViewCart({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);

	const { items, restaurantName } = useSelector(
		(state) => state.cartReducer.selectedItems
	);

	const total = items
		.map((item) => Number(item.price.replace("£", "")))
		.reduce((prev, curr) => prev + curr, 0);

	const totalGBP = total.toLocaleString("en", {
		style: "currency",
		currency: "GBP",
	});

	const addOrderToFireBase = () => {
		const db = firebase.firestore();
		db.collection("orders").add({
			items: items,
			restaurantName: restaurantName,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setModalVisible(false);
	};

	const styles = StyleSheet.create({
		modalContainer: {
			flex: 1,
			justifyContent: "flex-end",
			backgroundColor: "rgba(0,0,0,0.7)",
		},

		modalCheckoutContainer: {
			backgroundColor: "white",
			padding: 16,
			height: 500,
			borderWidth: 1,
		},

		restaurantName: {
			textAlign: "center",
			fontWeight: "600",
			fontSize: 18,
			marginBottom: 10,
		},

		subtotalContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: 15,
		},

		subtotalText: {
			textAlign: "left",
			fontWeight: "600",
			fontSize: 15,
			marginBottom: 10,
		},
	});

	const checkoutModalContent = () => {
		return (
			<>
				<TouchableOpacity
					onPress={() => setModalVisible(false)}
					style={styles.modalContainer}
				>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.restaurantName}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
						<View style={styles.subtotalContainer}>
							<Text style={styles.subtotalText}>Subtotal</Text>
							<Text>{totalGBP}</Text>
						</View>
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<TouchableOpacity
								style={{
									marginTop: 20,
									backgroundColor: "black",
									alignItems: "center",
									padding: 13,
									borderRadius: 30,
									width: 300,
								}}
								onPress={() => {
									addOrderToFireBase();
								}}
							>
								<Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
								<Text
									style={{
										position: "absolute",
										right: 20,
										color: "white",
										fontSize: 15,
										top: 17,
									}}
								>
									{total ? totalGBP : ""}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableOpacity>
			</>
		);
	};

	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => setModalVisible(false)}
				onPress={() => setModalVisible(false)}
			>
				{checkoutModalContent()}
			</Modal>
			{total ? (
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						position: "absolute",
						bottom: 90,
						zIndex: 999,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<TouchableOpacity
							style={{
								marginTop: 20,
								backgroundColor: "black",
								alignItems: "center",
								borderRadius: 10,
								width: 400,
								position: "relative",
								flexDirection: "column",
								justifyContent: "flex-end",
								padding: 15,
								bottom: -220,
							}}
							onPress={() => setModalVisible(true)}
						>
							<Text style={{ color: "white", fontSize: 15, marginBottom: 10 }}>
								Total: {totalGBP}
							</Text>
							<Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</>
	);
}
