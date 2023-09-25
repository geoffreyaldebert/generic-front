import { useLoading } from 'vue-loading-overlay'
import { toast } from "vue3-toastify"
import { useFetch } from '../../composables/fetch'
import config from "@/config"

const $loading = useLoading()

/**
 * A wrapper around search engine API
 */
export default class SearchAPI {
  async search(query, topic, page, args) {
    const loader = $loading.show()
    if (query == undefined) {
      query = ""
    }
    if (topic == undefined) {
      topic = config.website__main_topic
    }
    const url = import.meta.env.VITE_DATA_GOUV_ENV + "api/2/datasets/search?q=" + query + "&topic=" + topic + "&page_size=21" + "&page=" + page
    return await useFetch(url, (error) => {
      if (error && error.message) {
        toast(error.message, { type: "error", autoClose: false })
      }
    }, () => loader.hide())
  }
}
