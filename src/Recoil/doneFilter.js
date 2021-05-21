import { selector } from "recoil";
import { todoListState } from "./todoListState";

export const doneFilter = selector({
  key: "doneFilter",
  get: ({ get }) => {
    const list = get(todoListState);
    return list.filter((item) => item.state === "DONE");
  },
});
