import { GROUPS } from "../constants/groups";

export function searchGroupsByCategory(category) {
  const groups = GROUPS.filter((group) => group.category == category);
  return groups;
}

export function searchGroupById(groupId) {
  const result = GROUPS.find((group) => group.groupId == groupId);
  return result;
}

export function checkJoined(groupId) {
  const selectedGroup = GROUPS.find((group) => (group.groupId = groupId));
  return selectedGroup.joined;
}

export function setJoined(groupId) {
  const group = GROUPS.find((group) => group.groupId == groupId);
  group.joined = true;
}
