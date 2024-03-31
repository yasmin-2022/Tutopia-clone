import { defineStore } from "pinia";
export const useLoginStore = defineStore("loginStore", {
  state: () => ({
    name: "yasmin",
    id: 1,
  }),
});
