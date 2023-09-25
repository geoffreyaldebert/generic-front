import { defineStore } from "pinia"

import SearchAPI from "../services/api/SearchAPI"

const searchAPI = new SearchAPI()
const pageSize = 21

export const useSearchStore = defineStore("search", {
  state: () => ({
    data: {}
  }),
  getters: {
    facets: (state) => {
      return null
    },
    datasets: (state) => {
      return state.data.data || []
    },
    pagination: (state) => {
      if (!state.data) return []
      if (!state.data.total && !state.data.page_size) return []
      return [...Array(Math.round((state.data.total / state.data.page_size))).keys()].map(page => {
        page += 1
        return {
          label: page,
          href: "#",
          title: `Page ${page}`,
        }
      })
    },
  },
  actions: {
    async search(query, topic, page = 1, filter = []) {
      const args = { hitsPerPage: pageSize, page: page, filter: filter }
      const results = await searchAPI.search(query, topic, page, args)
      this.data = results
    }
  },
})
