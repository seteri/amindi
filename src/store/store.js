import { createStore } from 'vuex'
import YoutubePlugin from '../plugins/youtubePlugin'


export default createStore({
  plugins: [YoutubePlugin]

})