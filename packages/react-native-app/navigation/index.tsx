/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { SafeAreaProvider } from "react-native-safe-area-context";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 import {
	 NavigationContainer,
	 DefaultTheme,
	 DarkTheme,
 } from "@react-navigation/native";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import * as React from "react";
 import { ColorSchemeName, Button } from "react-native";
 import { useWalletConnect } from "@walletconnect/react-native-dapp";
 import Colors from "../constants/Colors";
 import useColorScheme from "../hooks/useColorScheme";
 import ModalScreen from "../screens/ModalScreen";
 import NotFoundScreen from "../screens/NotFoundScreen";
 import { RootStackParamList, RootTabParamList } from "../types";
 import LinkingConfiguration from "./LinkingConfiguration";
 import LoginScreen from "../screens/LoginScreen";
 import Minter from "../screens/Minter";
 import deployedContracts from "@celo-progressive-dapp-starter/hardhat/deployments/hardhat_contracts.json";
 import Account from "../screens/Account";
 
 export default function Navigation({
	 colorScheme,
 }: {
	 colorScheme: ColorSchemeName;
 }) {
	 return (
		 <NavigationContainer
			 linking={LinkingConfiguration}
			 theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			 <RootNavigator />
		 </NavigationContainer>
	 );
 }
 
 /**
	* A root stack navigator is often used for displaying modals on top of all other content.
	* https://reactnavigation.org/docs/modal
	*/
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
	 const connector = useWalletConnect();
	 return (
		 <Stack.Navigator>
			 {connector.connected ? (
				 <Stack.Screen
					 name='Root'
					 // the Root path renders the component mentioned below.
					 component={BottomTabNavigator}
					 options={{ headerShown: false }}
				 />
			 ) : (
				 <Stack.Screen
					 name='Login'
					 component={LoginScreen}
					 options={{ headerShown: false }}
				 />
			 )}
			 <Stack.Screen
				 name='NotFound'
				 component={NotFoundScreen}
				 options={{ title: "Oops!" }}
			 />
			 <Stack.Group screenOptions={{ presentation: "modal" }}>
				 <Stack.Screen name='Modal' component={ModalScreen} />
			 </Stack.Group>
		 </Stack.Navigator>
	 );
 }
 
 /**
	* A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
	* https://reactnavigation.org/docs/bottom-tab-navigator
	*/
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
	 const colorScheme = useColorScheme();
 
	 const contracts = deployedContracts["44787"]?.["alfajores"]?.contracts;
 
	 return (
		 <SafeAreaProvider>
			 <BottomTab.Navigator
				 // first screen visible after login
				 initialRouteName='Minter'
				 screenOptions={{
					 headerShown: true,
					 tabBarActiveTintColor: Colors[colorScheme].tint,
				 }}>
				 <BottomTab.Screen
					 name='Minter'
					 children={(props) => (
						 <Minter contractData={contracts.Minter} {...props} />
					 )}
					 options={() => ({
						 title: "Safari Minter",
						 headerShown: false,
						 // render icons if any
						 tabBarIcon: ({
							 focused: boolean,
							 color: string,
							 size: number,
						 }) => {
							 return <></>;
						 },
						 tabBarLabelPosition: "beside-icon",
					 })}
				 />
				 <BottomTab.Screen
					 name='Account'
					 component={Account}
					 options={() => ({
						 title: "Account",
						 headerShown: false,
						 tabBarIcon: ({
							 focused: boolean,
							 color: string,
							 size: number,
						 }) => {
							 return <></>;
						 },
						 tabBarLabelPosition: "beside-icon",
					 })}
				 />
			 </BottomTab.Navigator>
		 </SafeAreaProvider>
	 );
 }
 