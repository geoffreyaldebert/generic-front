import { defineStore } from "pinia"

export const useChartStore = defineStore("useChartStore", {
  state: () => ({
    data: null,
  }),
  getters: {
  },
  actions: {
    async getCharts(typeObject, id) {
      this.data = null;
      const response = await fetch("https://demo.data.gouv.fr/api/1/" + typeObject + "/" + id);
      const data = await response.json();
      if (data.extras && data.extras["config:charts"]) {
        this.data = data.extras["config:charts"]
      }
    }
  },
})
