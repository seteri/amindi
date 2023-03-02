
import switchButtons from "../../modules/switchButtonsModule"
import citiesModule from "../../modules/citiesModule";
import registrationModule from "../../modules/registrationModule";

export default function mainPlugin(store){

    store.registerModule("switchButtons",switchButtons)
    store.registerModule("cities",citiesModule)
    store.registerModule("registration",registrationModule)
}