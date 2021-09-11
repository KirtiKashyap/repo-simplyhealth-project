import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage'
export class Register extends React.Component{

constructor(props){
    super(props)
    this.state={
        userName:'',
        email:'',
        password:'',
        passwordConfirm:''

    };

}

registerAccount=()=>{
    if(!this.state.userName){
        Alert.alert('Please Enter Username')
    }else if(!this.state.email){
      Alert.alert('Please Enter Email')
    }else if(!this.state.password){
      Alert.alert('Please Enter Password')
    }else{
        AsyncStorage.getItem(this.state.email,(err, result)=>{
            if(result!=null){
                Alert.alert('Email already exists')
            }else{
                AsyncStorage.setItem(this.state.email,
                    this.state.password,(err,result)=>{
                      this.props.navigation.navigate('Lesson', {
                        email: this.state.email
                      })
                    });
            }
        });
    }
}

    render(){
        return(
          <View style={styles.container}>
          <Image style={styles.image} source={require("./../../assets/logo.png")} />
    <Text style={styles.logo}>Simply Health</Text>
    <View style={styles.inputView} >
      <TextInput  
                style={styles.inputText}
                placeholder="UserName."
                placeholderTextColor="#003f5c"
                onChangeText={(text)=>this.setState({userName: text})}
                value={this.state.userName}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={text=>this.setState({email: text})}
                value={this.state.email}
              />
            </View>
       
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(text)=>this.setState({password: text})}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity>
          <Text style={styles.forgot}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>Already have an account</Text></TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.registerBtn}
            onPress={this.registerAccount}>
              <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>

           
          </View>
        );
    }
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
      width:"80%",
      backgroundColor:"#999999",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:25
    },
    inputText:{
      height:50,
      color:"#003f5c"
    },
    forgot:{
      color:"#003f5c",
      fontSize:14
    },
    registerBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },
    image:{
      marginBottom: 15,
      width:150,
      height:150
    }
});