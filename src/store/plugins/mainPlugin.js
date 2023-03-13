
import switchButtons from "../modules/switchButtonsModule"
import citiesModule from "../modules/citiesModule";
import registrationModule from "../modules/registrationModule";
import userUpdateModule from "@/store/modules/userUpdateModule";
import loginModule from "../modules/logInModule";
import categoriesModule from "../modules/categoriesModule";

export default function mainPlugin(store){

    store.registerModule("switchButtons",switchButtons)
    store.registerModule("cities",citiesModule)
    store.registerModule("registration",registrationModule)
    store.registerModule("updateUser",userUpdateModule)
    store.registerModule("login",loginModule)
    store.registerModule("categories",categoriesModule)
}