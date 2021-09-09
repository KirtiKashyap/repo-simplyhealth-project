import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert,AsyncStorage} from 'react-native';
import Dialog from "react-native-dialog";
export class MyLogin extends React.Component{
  
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            dialogVisible: false
          };
    }

    showDialog = () => {
      this.setState({ dialogVisible: true });
    };
   
    handleCancel = () => {
      this.setState({ dialogVisible: false });
    };
   
    handleDelete = () => {
      this.setState({ dialogVisible: false });
    };

    loginUser=()=>{
      if(!this.state.email){
        Alert.alert('Enter email')
      }else if(!this.state.password){
        Alert.alert('Enter password')
      }else{
        AsyncStorage.getItem(this.state.email,(err, result)=>{
          if(result!=null){
            if(result!=this.state.password){
              Alert.alert('Password Incorrect')
            }
            else{
              this.props.navigation.navigate('Lesson', {
                email: this.state.email
              })
            }
          }else{
              Alert.alert('Looks like new user. Please Register')
          }
      });
      }
      
    }
    render(){
        return (
            <View style={styles.container}>
              <Image style={styles.image} source={require("./../../assets/logo.png")} />

        <Text style={styles.logo}>Simply Health</Text>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}
          onPress={this.showDialog}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signup}
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.loginBtn}
            onPress={this.loginUser}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Enter your email</Dialog.Title>
          <Dialog.Input/>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Submit" onPress={this.handleDelete} />
        </Dialog.Container>

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
      signup:{
        color:"#003f5c",
        fontSize:14,
        marginTop: 10
      },
      loginBtn:{
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