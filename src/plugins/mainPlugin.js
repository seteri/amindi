
import switchButtons from "../modules/switchButtonsModule";
import apiModule from "../modules/apiModule";

export default function mainPlugin(store){

    store.registerModule("switchButtons",switchButtons)
    store.registerModule("api",apiModule)
}