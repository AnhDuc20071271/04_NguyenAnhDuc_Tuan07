import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Screen2 = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [number, setNumber] = useState(1);
  const numberup = () => {
    setNumber(number + 1);
  };
  const numberdown = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4, alignItems: "center", marginVertical: 30 }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={{ flex: 6 , marginHorizontal:20}}>
        <Text style={{ fontWeight: "800", fontSize: 18,marginBottom:10 }}>{item.name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
          <Text style={{ fontWeight: "800", fontSize: 14, color: "gray" }}>
            {item.description}
          </Text>
          <Text style={{ fontWeight: "800", fontSize: 18 }}>{item.price}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="time-outline" size={30} />
          <Text style={{ color: "gray", marginLeft: 5 }}>Delivery in</Text>
        </View>

        <View style={{ flexDirection: "row" ,justifyContent:"space-between"}}>
          <Text style={{ fontWeight: "bold", marginLeft: 40 ,fontSize:18}}>30 min</Text>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity
            onPress={() => {
              numberup();
            }}
            style={{
              backgroundColor: "#F1B000",
              marginLeft: 60,
              padding: 2,
              borderRadius: 10,
            }}
          >
            <SimpleLineIcons name="plus" size={20} color={"white"} />
          </TouchableOpacity>
          <Text style={{ paddingHorizontal: 10 }}>{number}</Text>
          <TouchableOpacity
            style={{ backgroundColor: "#F1B000", padding: 2, borderRadius: 10 }}
            onPress={() => {
              numberdown();
            }}
          >
            <SimpleLineIcons name="minus" size={20} color={'white'} />
          </TouchableOpacity>
          </View>

        </View>
          <Text style={{fontWeight:"bold",fontSize:18,marginBottom:5}}>Restaurants info</Text>
          <Text>
            Order a Large Pizza but the size is the equivalent of a medium/small
            from other places at the same price range.
          </Text>

        <View style={{width:'100%',height:60, backgroundColor:"#F1B000", borderRadius:10,marginTop:20}}>
          <Pressable style={{flex:1,justifyContent:"center",alignItems:"center"}} onPress={()=>{ navigation.navigate("Screen1")}}>
           <Text style={{color:'white',fontSize:18,fontWeight:"bold"}}>Add to card</Text> 
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
