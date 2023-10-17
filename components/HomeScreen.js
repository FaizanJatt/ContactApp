import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView } from 'react-native';
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.info}>
          <Text >
            The Place where all your IT needs are fullfilled, 
          </Text>
        </View>
        <View style={styles.info}>
          <Text >
              Feel free to contact us by clicking the button below
            </Text>
        </View>
        <TouchableOpacity style={styles.contact} 
        onPress={()=>navigation.push('Contact')}>
          <Text style={{fontWeight:'bold'}}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#7a95bf',
    alignItems: 'center',
    justifyContent:'flex-start',
  },

  main:{
    marginTop:10,
    height:'100%',
    gap:10,
    alignItems:"center"
  },
  info:{
    backgroundColor:"#DDDDDD",
    padding:20,
    borderRadius:18,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
  },
  contact: {
    backgroundColor:"#DDDDDD",
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:12,
    width:200,
    paddingBottom:10,
    paddingTop:10,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
  }
});
