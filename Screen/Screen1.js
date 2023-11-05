import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Screen1() {
  var [data, setData] = useState([]);
  const [text, setText] = useState("");
  const navigation = useNavigation();
  var url = "https://6547201f902874dff3abfb1e.mockapi.io/donut";
  var fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(fetchData, []);
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "gray", fontSize: 18 }}>Welcome, Jala!</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
          Choice you Best food
        </Text>

        <TextInput
          style={{
            height: 45,
            borderWidth: "1px",
            borderColor: "gray",
            fontSize: "16px",
            fontWeight: "bold",
            width: "70%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D3D3D3",
          }}
          placeholder="   Search Food!"
          placeholderTextColor="gray"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Pressable
            style={{
              borderWidth: 3,
              borderRadius: 5,
              borderColor: "gray",
              width: 90,
              backgroundColor: "yellow",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Donut
          </Pressable>
          <Pressable
            style={{
              borderWidth: 3,
              borderRadius: 5,
              borderColor: "gray",
              width: 90,
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "30px",
            }}
          >
            Pink Donut
          </Pressable>
          <Pressable
            style={{
              borderWidth: 3,
              borderRadius: 5,
              borderColor: "gray",
              width: 120,
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "30px  ",
            }}
          >
            Floating Donut
          </Pressable>
        </View>
      </View>
      {data.map((item) => {
        return (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              marginTop: 20,
              backgroundColor: "pink",
              borderRadius: 10,
              paddingHorizontal: 10,
              marginRight: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                margin: 3,
                borderRadius: 10,
                width: 100,
                height: 100,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ ...styles.name, marginBottom: 5 }}>
                {item.name}
              </Text>
              <Text style={{ ...styles.desc, marginBottom: 5 }}>
                {item.description}
              </Text>
              <Text style={{ ...styles.price, marginBottom: 5 }}>
                {item.price}
              </Text>
            </View>
            <View style={{ position: "absolute", right: 50, bottom: 0 }}></View>

            <View
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                backgroundColor: "#F1B000",
                padding: 2,
                borderRadius: 30,
                borderTopLeftRadius: 90,
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Screen2", { item: item });
                }}
              >
                <Ionicons name="add" size={40} color={"white"} />
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    color: "gray",
    fontSize: 16,
    fontWeight: "400",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Screen1;
