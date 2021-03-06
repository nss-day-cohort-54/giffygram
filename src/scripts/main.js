/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import { LoginForm } from "./auth/Login.js"
import { GiffyGram } from "./GiffyGram.js"

/*
    Query the existing HTML for the element which will contain all of the
    HTML generated by our components.
*/
const applicationElement = document.querySelector(".giffygram")

/*
    If any component in our application changes ANY state at all, then
    all of the HTML must be built again to express that new state.
*/
applicationElement.addEventListener("stateChanged", () => renderApp())

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    /**
     * If user is authenticated, load the main UI, else show login form
     */
    if (user) {
        console.log("User authenticated")
        applicationElement.innerHTML = GiffyGram()
    } else {
        console.log("User not authenticated")
        applicationElement.innerHTML = LoginForm()
    }
}

renderApp()
