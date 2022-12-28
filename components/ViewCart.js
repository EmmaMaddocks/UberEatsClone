import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderItem from "./OrderItem";

export default function ViewCart() {
	const [modelVisable, setModalVisable] = useState(false);

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
		modalCheckoutButton: {
			textAlign: "center",
			fontWeight: "600",
			marginBottom: 10,
		},
		subtotalContainer: {
			flexDirection: "row",
			justifyContent: "center",
			marginTop: 15,
		},
		restaurantText: {
			fontSize: 20,
			fontWeight: "600",
			color: "black",
			textAlign: "center",
		},
	});

	const checkoutModalContent = () => {
		return (
			<>
				<View style={styles.modalContainer}>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.restaurantText}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
					</View>
				</View>
			</>
		);
	};

	return (
		<>
			<Modal
				animationType="slide"
				visible={modelVisable}
				transparent={true}
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => setModalVisable(false)}
				onPress={() => setModalVisable(false)}
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
						bottom: 130,
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
							}}
							onPress={() => setModalVisable(true)}
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
