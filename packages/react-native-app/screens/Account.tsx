import { useState, useEffect, useContext } from "react";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { Text, View, TouchableOpacity } from "../components/Themed";
import { Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ThemeContext } from "../context/ThemeProvider";

export default function Account() {
	const connector = useWalletConnect();
	const { styles } = useContext(ThemeContext);
	const [accountLink, setAccountLink] = useState();
	useEffect(() => {
		setAccountLink(
			`https://alfajores-blockscout.celo-testnet.org/address/${connector.accounts[0]}/token-transfers`
		);
	}, [connector]);

	function handlePress() {
		WebBrowser.openBrowserAsync(accountLink);
	}

	return (
		<View style={styles.container}>
			<Image
        style={styles.logo}
        source={require('./assets/images/logo.png')}
      />
			<Text style={styles.title}>
				Account Info
			</Text>
			<TouchableOpacity		
				style={styles.externalLink}
				onPress={handlePress}> 
				<Text style={styles.externalLink}>
					{`${connector.accounts[0].substr(0, 5)}...${connector.accounts[0].substr(-5)}`}
				</Text>
			</TouchableOpacity>	
			<View style={styles.separator}></View>
			<TouchableOpacity style={{backgroundColor: "#006243"}} onPress={() => connector.killSession()}>
				<Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center", color: '#fff'}}>
					Disconnect Wallet
				</Text>
			</TouchableOpacity>
			<Text style={{ fontSize: 16, marginVertical: 20 }}>
				- Disconnect from your Valora app -
			</Text>
			<Image
        style={styles.logo}
        source={require('./assets/images/gorilla.png')}
      />
		</View>
	);
}
