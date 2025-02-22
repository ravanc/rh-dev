import { GROUPS } from "../constants/groups";

export function searchGroupsByCategory(category) {
  const groups = GROUPS.filter((group) => group.category == category);
  return groups;
}
