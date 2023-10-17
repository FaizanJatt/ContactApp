import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,SafeAreaView,Text,View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ContactScreen from "./components/ContactScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ headerTitle: () => <Header/>}}/>
        <Stack.Screen name="Contact" component={ContactScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();


function Header(){
  return (
    <SafeAreaView style={styles.header}>
      <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>
        The IT Studio
      </Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header:{
    // flex:1,
      // justifyContent:'center',
      // flex:0,1
    // alignItems:'center',
  }});

