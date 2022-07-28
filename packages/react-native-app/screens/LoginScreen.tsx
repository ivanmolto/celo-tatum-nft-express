import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { ImageBackground, Button, StyleSheet } from "react-native";
import { RootStackScreenProps } from "../types";
import { Text, View, TouchableOpacity } from "../components/Themed";

export default function LoginScreen({
	navigation,
}: RootStackScreenProps<"Root">) {
	const connector = useWalletConnect();
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			> 	
				<TouchableOpacity  style={{ backgroundColor: "#006243", marginRight: 70, marginLeft: 70 }} onPress={() => connector.connect()} >
          <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }} >
						Connect Wallet
					</Text>
        </TouchableOpacity>
      </ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rootScreen: {
    flex: 1,
		justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
});
