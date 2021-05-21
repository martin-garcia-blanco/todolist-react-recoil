import { selector } from "recoil";
import { todoListState } from "./todoListState";

export const toDoFilter = selector({
  key: "todoListFilter",
  get: ({ get }) => {
    const list = get(todoListState);
    return list.filter((item) => item.state === "TODO");
  },
});
