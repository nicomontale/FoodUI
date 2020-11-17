import React, {Component} from 'react';
import {Text,StyleSheet, View, ImageBackground, StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons//Entypo'
import IconSearch from 'react-native-vector-icons/Feather'
import Bell from 'react-native-vector-icons/AntDesign'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden/>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View 
        style={{overflow: "hidden", borderBottomRightRadius: 50}}>

<ImageBackground style={{
          width:"100%",
          height:300,
         
        }}  source={{
          uri: 
          "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        }}><View  
        style={{ 
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", paddingHorizontal: 20, marginTop: 20}}>
          <View>
          <Icon name="text" size={26} color="white"/>

          </View>
          <View style={{flexDirection:"row"}}>
            <View> 
              <IconSearch name="search" size={23} color="white"style={{paddingRight:10}} />
            </View>
            <View style={{paddingLeft:10}}> 
              <Bell name="bells" size={23} color="white"/>
            </View>
            
            
            </View>
        
        
        
        </View>
        <View style={{paddingHorizontal:20, flex:1 ,
        justifyContent:"center", marginTop: -15}}>
   <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Hello Nicola</Text>

   <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}>Hope you have a great day!</Text>
   <View style={{flexDirection:"row"}}>

     <View style={{paddingHorizontal:20, paddingVertical: 5, borderRadius: 10, backgroundColor:"grey", marginTop:5}}>

     <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}>CASUAL MEMBER</Text>

     </View>
   </View>
        </View>
       </ImageBackground>

       </View>
       <View style={{marginTop:30, paddingHorizontal:20}}>

       <Text style={{fontSize:18, color:"black", fontWeight:"bold"}}>HOTEST FOOD</Text>

<Text style={{fontSize:14, color:"grey", fontWeight:"bold"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

       </View>
       <ScrollView horizontal={true} style={{paddingLeft: 20, paddingRight: 10, marginTop:30}} showsHorizontalScrollIndicator={false}>

         <View style={{flexDirection:"row"}}><View style={{overflow: "hidden",maxHeight:200, borderRadius:10,marginRight:10 }}> 
     <ImageBackground style={{
          width:150,
          height:200,

        }}  source={{
          uri: 
          "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        }}>
          <View style={{position:"absolute", bottom:20, left:10}}>
          <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
          <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
            </View></ImageBackground> 
        

        
         </View>

         <View style={{overflow: "hidden",maxHeight:200, borderRadius:10 ,marginRight:10}}> 
     <ImageBackground style={{
          width:150,
          height:200,

        }}  source={{
          uri: 
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
        }}>
          <View style={{position:"absolute", bottom:20, left:10}}>
          <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
          <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
            </View></ImageBackground> 
        

        
         </View>
         
         <View style={{overflow: "hidden",maxHeight:200, borderRadius:10 ,marginRight:10}}> 
     <ImageBackground style={{
          width:150,
          height:200,

        }}  source={{
          uri: 
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        }}>
          <View style={{position:"absolute", bottom:20, left:10}}>
          <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
          <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
            </View></ImageBackground> 
        

        
         </View>
         <View style={{overflow: "hidden",maxHeight:200, borderRadius:10 ,marginRight:10}}> 
     <ImageBackground style={{
          width:150,
          height:200,

        }}  source={{
          uri: 
          "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80"
        }}>
          <View style={{position:"absolute", bottom:20, left:10}}>
          <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
          <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
            </View></ImageBackground> 
        

        
         
         


         </View>
         <View style={{width:30}}></View>
         </View>
     

       </ScrollView>
       
       <View style={{marginTop:20, paddingHorizontal:20}}>

<Text style={{fontSize:18, color:"black", fontWeight:"bold"}}>HOTEST FOOD</Text>

<Text style={{fontSize:14, color:"grey", fontWeight:"bold"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

</View><ScrollView horizontal={true} style={{paddingLeft: 20, paddingRight: 10, marginTop:30}} showsHorizontalScrollIndicator={false}>

<View style={{flexDirection:"row"}}><View style={{overflow: "hidden",maxHeight:200, borderRadius:10,marginRight:10 }}> 
<ImageBackground style={{
 width:450,
 height:200,

}}  source={{
 uri: 
 "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
}}>
 <View style={{position:"absolute", bottom:20, left:10}}>
 <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
 <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
   </View></ImageBackground> 



</View>

<View style={{overflow: "hidden",maxHeight:200, borderRadius:10 ,marginRight:10}}> 
<ImageBackground style={{
 width:150,
 height:200,

}}  source={{
 uri: 
 "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
}}>
 <View style={{position:"absolute", bottom:20, left:10}}>
 <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
 <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
   </View></ImageBackground> 



</View>

<View style={{overflow: "hidden",maxHeight:200, borderRadius:10 ,marginRight:10}}> 
<ImageBackground style={{
 width:150,
 height:200,

}}  source={{
 uri: 
 "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
}}>
 <View style={{position:"absolute", bottom:20, left:10}}>
 <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
 <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
   </View></ImageBackground> 



</View>
<View style={{overflow: "hidden",maxHeight:200, borderRadius:10 ,marginRight:10}}> 
<ImageBackground style={{
 width:150,
 height:200,

}}  source={{
 uri: 
 "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80"
}}>
 <View style={{position:"absolute", bottom:20, left:10}}>
 <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Lorem</Text>
 <Text style={{fontSize:14, color:"white", fontWeight:"bold"}}><Bell name="star" size={24} color="white"/>5</Text>
   </View></ImageBackground> 







</View>
<View style={{width:30}}></View>
</View>


</ScrollView>
<View style={{height: 30, }}></View>
</ScrollView>
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({




});
