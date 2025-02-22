import { GROUPS } from "../constants/groups";

export function searchGroupsByCategory(category) {
  const groups = GROUPS.filter((group) => group.category == category);
  return groups;
}

export function checkJoined(groupId) {
  const selectedGroup = GROUPS.filter((groupId) => g.groupId = groupId);
  return selectedGroup.joined;
}