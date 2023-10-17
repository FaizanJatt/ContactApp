import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Validator from '../utils/Validator';



export default function ContactScreen({navigation}) {
  const [email,setEmail] = React.useState("");
  const [name,setName] = React.useState("");
  const [num,setNum] = React.useState("");
  const [message,setMessage] = React.useState("");
  const [errors,setErrors] = React.useState({
    email:false,
    name:false,
    num:false,
    message:false,
  })
  const [sendMsg,setSendMsg] = React.useState(false);
  const [sentMsg,setSentMsg] = React.useState(false);

  React.useEffect(() => {
    const url = "https://nodemailer-iota.vercel.app/api";
    if(sendMsg ){
      fetch(url, {
        method:"POST",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:name,
          email:email,
          num:num,
          message:message
        })
      })
      .then((response) => response.json())
      .then((responseData)=>{
        console.log(JSON.stringify(responseData))
      })
      setSendMsg(false);
      setSentMsg(true);
    }else if(sentMsg){
      navigation.goBack();
    }
    return () => {
  
    }
  }, [sendMsg,sentMsg])

  const handleSubmit = async() => {
    console.log(name,email)
    let ErrCount = 0;
    let validator = new Validator(name,email,num,message);
    keys = Object.keys(validator);

    keys.map(key=>{
      setErrors(prev=>({
        ...prev,[key]:validator[key]
      }))
    })
    let entries = Object.entries(errors);

    for ([key,val] of entries){
      if(val === true){
        ErrCount++;
      }
    }
    console.log(ErrCount)
    if(ErrCount === 0 ){
      setSendMsg(true);
    }
  }


  return (
    <View style={styles.container}>
      <View style={errors.name === true ? styles.infoRed : styles.info }>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} placeholder='John'
        onChangeText={setName}
        value={name}
        ></TextInput>
      </View>
      <View style={errors.email === true ? styles.infoRed : styles.info}>
        <Text style={styles.text}>
            Email
        </Text>
        <TextInput style={styles.input} 
            placeholder='abc@gmail.com'
            onChangeText={setEmail}
            value={email}>
        </TextInput>
      </View>
      <View style={errors.num === true ? styles.infoRed : styles.info}>
        <Text style={styles.text}>Mobile Number</Text>
        <TextInput style={styles.input}
        placeholder='01234567890'
        onChangeText={setNum}
        value={num}
        ></TextInput>
      </View>
      <View style={errors.message === true ? styles.messageRed : styles.message}>
        <Text style={{fontSize:11,marginTop:5,height:15}}>Message</Text>
        <TextInput multiline={true}
        numberOfLines={4} 
        textAlignVertical='top' 
        style={styles.input} 
        placeholder='Message Here'
        onChangeText={setMessage}
        value={message}
        ></TextInput>
      </View>
      
        <TouchableOpacity style={styles.submit} onPress={()=>handleSubmit(email)}>
          <Text>
          Submit
          </Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input:{
    flex:1,
  },
  info:{
    marginTop:10,
    width:'90%',
    backgroundColor:"white",
    paddingLeft:20,
    borderRadius:7,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
    height:50,
    justifyContent:"center",
  },
  message:{
    marginTop:10,
    width:'90%',
    backgroundColor:"white",
    paddingLeft:20,
    borderRadius:7,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
    height:200,
    justifyContent:"center",
  },
  message:{
    marginTop:10,
    width:'90%',
    backgroundColor:"white",
    paddingLeft:20,
    borderRadius:7,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
    height:200,
    justifyContent:"center",
    
  },
  messageRed:{
    marginTop:10,
    width:'90%',
    backgroundColor:"white",
    paddingLeft:20,
    borderRadius:7,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
    height:200,
    justifyContent:"center",
    borderColor:'pink',
    borderStyle:'solid',
    borderWidth:2,
  },

  submit:{
    marginTop:12,
    width:'20%',
    backgroundColor:'white',
    fontWeight:'bold',
    height:30,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius:7,

  },
  infoRed:{
    marginTop:10,
    width:'90%',
    backgroundColor:"white",
    paddingLeft:20,
    borderRadius:7,
    shadowColor: "#000",
    shadowOffset: { width: 0,height: 2,},
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 8,
    height:50,
    justifyContent:"center",
    borderColor:'pink',
    borderStyle:'solid',
    borderWidth:2,
  },
 
  text:{
    fontSize:11,flex:1,marginBottom:-30,marginTop:5,
  },

});
