import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { React, useState, useEffect } from "react";
import { GROUPS } from "../constants/groups"; 
import { checkJoined } from "../lib/services";

const EventPage = () => {
  const { groupId } = useLocalSearchParams(); 

  const [group, setGroups] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => setJoined(checkJoined(groupId)));

  

  return (
    <SafeAreaView className="h-full bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-center">{group.name}</Text>
      <Text className="text-md text-center text-gray-700 mt-2">
        {group.category} Event
      </Text>
      <View className="bg-white rounded-lg p-4 mt-4 shadow-lg">
        <Text className="text-lg font-semibold">Time</Text>
        <Text className="text-md text-gray-600">{group.time}</Text>

        <Text className="text-lg font-semibold mt-4">Location</Text>
        <Text className="text-md text-gray-600">{group.location}</Text>

        <Text className="text-lg font-semibold mt-4">Members</Text>
        {group.members.map((member, index) => (
          <Text key={index} className="text-md text-gray-600">
            • {member}
          </Text>
        ))}

      </View>
      {
        group.joined ? 
        <TouchableOpacity className="text-lg font-semibold mt-4 bg-sky-300 p-4 rounded-lg mt-auto mb-8">
            <Text className="text-white">
                Join Telegram Group
            </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity 
         
          // onPress={() => }

          className="text-lg font-semibold mt-4 bg-lime-500 p-4 rounded-lg mt-auto mb-8">
            <Text className="text-lg">
                Join Event
            </Text>
        </TouchableOpacity>
      }
        
    </SafeAreaView>
  );
};

export default EventPage;
