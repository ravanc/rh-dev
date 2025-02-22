import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const eventTypes = [
  { name: "Food", image: require("../assets/images/Grabfood.webp") },
  { name: "Sports", image: require("../assets/images/bouldering.webp") },
  { name: "Study", image: require("../assets/images/study.webp") },
  { name: "Party", image: require("../assets/images/party.webp") },
  { name: "Competition", image: require("../assets/images/competition.webp") },
  { name: "Gaming", image: require("../assets/images/gaming.webp") },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <Text className="text-xl font-semibold text-center mt-4">Welcome, KAI KIAT!</Text>
      <Text className="text-2xl font-bold text-center my-5">Event Categories</Text>
      <FlatList
        data={eventTypes}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-1 m-2 h-32 rounded-xl overflow-hidden relative"
            onPress={() => navigation.navigate("EventList", { category: item.name })}
          >
            <Image source={item.image} className="absolute w-full h-full rounded-xl" />
            <View className="absolute top-0 left-0 w-full h-full bg-black/30 flex justify-end p-3 rounded-xl">
              <Text className="text-white font-bold text-lg">{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
