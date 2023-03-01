
import switchButtons from "../modules/switchButtonsModule";
import citiesModule from "../modules/citiesModule";

export default function mainPlugin(store){

    store.registerModule("switchButtons",switchButtons)
    store.registerModule("cities",citiesModule)
}