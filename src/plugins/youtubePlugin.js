import videosModule from "../modules/videosModule";
import iconsModule from "../modules/iconsModule";

export default function youtubePlugin(store){
    store.registerModule("Youtube",videosModule)
    store.registerModule("iconsPlugin",iconsModule)
}