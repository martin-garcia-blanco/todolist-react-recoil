import { selector } from "recoil";
import { todoListState } from "./todoListState";

export const doingFilter = selector({
  key: "doingFilter",
  get: ({ get }) => {
    const list = get(todoListState);
    return list.filter((item) => item.state === "DOING");
  },
});
