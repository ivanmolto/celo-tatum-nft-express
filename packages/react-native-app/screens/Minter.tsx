import { useState, useEffect, useContext } from "react";
import { Image, StyleSheet, ActivityIndicator, TextInput } from "react-native";
import { Text, View, TouchableOpacity } from "../components/Themed";
import * as WebBrowser from "expo-web-browser";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Web3 from "web3";
import { ThemeContext } from "../context/ThemeProvider";
const web3 = new Web3("https://alfajores-forno.celo-testnet.org");

export default function Minter(props) {
	const { styles } = useContext(ThemeContext);
	const connector = useWalletConnect();
	const [contractLink, setContractLink] = useState();
	const [loading, setLoading] = useState(false)
	const [mined, setMined] = useState(false);

	const mintNft = async () => {
		setMined(false);
		try {
			const resp = await fetch(
				`https://api-eu1.tatum.io/v3/nft/mint`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': 'YOUR_TATUM_API_KEY'
					},
					body: JSON.stringify({
						chain: "CELO",
						to: connector.accounts[0],
						url: "https://ivanmolto.mypinata.cloud/ipfs/QmVdcF75UXkQipJPiuwDRkwuAoz6A6NEijHdddbGh1Ad8A",
						feeCurrency: "CELO"
					})
				}
			);
			setLoading(true);
			const data = await resp.json();
			setLoading(false)
			console.log(data);
		} catch (e) {
			console.log(e);
		} finally {
			setMined(true);
		}
	};
	
	function handlePress() {
		WebBrowser.openBrowserAsync(contractLink);
	}

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Image
					style={styles.logo}
					source={require('./assets/images/logo.png')}
				/>
			</View>
			<View style={styles.innerContainer}>
			<Text style={styles.title}>Eco friendly NFTs</Text>
				<TouchableOpacity style={{ backgroundColor: "#006243"}} onPress={mintNft}>
					<Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center", color: 'white' }}>
						Mint Your Free Hippo NFT
					</Text>
				</TouchableOpacity>
				{ !loading && !mined && <Text style={{ fontSize: 16  }}>- No crypto needed -</Text> }
				{ loading && <Text style={{ fontSize: 16  }}>Minting...please wait</Text> }
				{ mined && <Text style={{ fontSize: 16  }}>NFT dropped in your account 😊</Text> }
				<View style={styles.separator}></View>
				<Text style={{ fontSize: 16, marginVertical: 30 }}>Mint NFT's with Celo and Tatum's NFT Express</Text>
			</View>
			<Image
        style={styles.logo}
        source={require('./assets/images/hippo.png')}
      />
		</View>
	);
}
