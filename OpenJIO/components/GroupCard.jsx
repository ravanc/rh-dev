import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const GroupCard = ({ group }) => {
  return (
    <TouchableOpacity
      className="bg-white h-32 rounded-xl mb-3 flex justify-center p-4"
      activeOpacity={0.9}
    >
      <Text className="text-xl font-psemibold">{group.name}</Text>
      <Text className="text-lg font-pregular">Location: {group.location}</Text>
      <Text className="text-lg font-pregular">Time: {group.time}</Text>
    </TouchableOpacity>
  );
};

export default GroupCard;
