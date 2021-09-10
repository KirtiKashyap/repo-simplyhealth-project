import React from "react";
import {Text, View, FlatList, Image,TouchableOpacity} from 'react-native'

export class Lesson extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            email:'',
            listLoaded: false,
            tubeId:'',
            videoLists:[]
        };
    }
    async getLessionList(){
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyC0HnMmQAranaCvvxP0dFteStxv458x3Pc');
            const responseJson = await response.json();
            this.setState({
                listLoaded: true,
                videoLists: Array.from(responseJson.items)
            });
          } catch (error) {
            console.log(error);
          } finally {
            this.setState({ isLoading: false });
          }
        
    }
     componentDidMount(){
        this.setState({
            email: this.props.route.params.email
          });
        this.getLessionList();
    }
render(){
    const data = this.props.route.params.email;
    console.log(data)
    return(
  
        <View>
            {
                this.state.listLoaded &&
                (
                    <View style={{marginBottom:10}}>
                        <Text>Email id is: {this.state.email}</Text>
                        <FlatList
                        data={ this.state.videoLists}
                        keyExtractor={(item, index) => 'key'+index}

                        renderItem={({item}) => 
                        <TouchableOpacity activeOpacity={0.9}
                        onPress={() => {
                            this.setState({tubeId:item.id.videoId})
                            console.log(this.state.tubeId)
                            this.props.navigation.navigate('LessonDetail',{
                                tubeId: this.state.tubeId
                              });
                          }}>
                        <View>
                      
                        <Image 
                          source={{ uri: item.snippet.thumbnails.high.url }} 
                          indicatorProps={{
                          size: 80,
                          borderWidth: 0,
                          color: 'rgba(150, 150, 150, 1)',
                          unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                       style={{
                        width: '100%',
                          height: 240, 
                          alignItems: 'center',
                          justifyContent: 'center',
                      }}/>
                      
                      
                        <Text> {item.snippet.title} </Text>
                        </View>
                     </TouchableOpacity>
                         }
                        />
                    </View>
                )
            }
{
    !this.state.listLoaded && (
<View style={{paddingTop: 30}}>
    <Text>LOADING</Text>
    </View>
    )
}
        </View>
    );
}
}


