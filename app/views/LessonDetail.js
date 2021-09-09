import React from "react";
import { View,Text } from "react-native";
import { WebView } from 'react-native-webview';

export class LessonDetail extends React.Component{

render(){
   const tubeId = this.props.route.params.tubeId;
    console.log(tubeId)
    let tubeUrl="https://www.youtube.com/embed/"+tubeId;
return(
   <View>
   <Text>{tubeId}</Text>
<WebView
style={{margigeTop: 20}}
javaScriptEnabled={true}
source={{uri: tubeUrl}}
/>
</View>)

}
   
}