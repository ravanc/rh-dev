import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";

import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <SafeAreaView>
      <Text className="font-pregular text-xl">Welcome, KAI KIAT QUAH!</Text>
      <CustomButton
        text="Start"
        containerStyle="w-[256px] h-[42px] mt-[28px] rounded-lg"
        textStyle="text-lg font-pregular"
        handlePress={() =>
          router.push({
            pathname: "/category/Study",
            params: {},
          })
        }
      />
    </SafeAreaView>
  );
};

export default Home;
