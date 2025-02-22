import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { searchGroupsByCategory } from "../lib/services";

import GroupCard from "../../components/GroupCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Category = () => {
  const { category } = useLocalSearchParams();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(searchGroupsByCategory(category));
  }, []);

  return (
    <SafeAreaView className="h-full bg-blue-200 py-4">
      <Text className="text-2xl text-center font-pbold">{category} Groups</Text>
      <ScrollView className="flex flex-col  p-4">
        {groups.map((group) => (
          <GroupCard group={group} key={group.groupId} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
