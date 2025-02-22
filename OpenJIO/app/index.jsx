import React from "react";
import { router } from "expo-router";
import { Text, View, Image } from "react-native";

import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <>
      <View className="flex-none justify-center items-center bg-blue-300 h-full">
        <View className="justify-center items-center">
          <View className="w-[250px] h-[250px] rounded-full bg-white/60" />
          <Image
            source={require("../assets/images/splash-screen/logo.png")}
            className="h-[200px] w-[200px] absolute"
            resizeMode="contain"
          />
        </View>
        <Text className="color-white mt-[48px] text-lg font-pbold">
          Need a kaki? Just open jio!
        </Text>
        <CustomButton
          text="Start"
          containerStyle="w-[256px] h-[42px] mt-[28px] rounded-lg"
          textStyle="text-lg font-pregular"
          handlePress={() => router.push("/home")}
        />
      </View>
    </>
  );
}
