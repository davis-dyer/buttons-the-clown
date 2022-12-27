import { ClownReservation } from "./ClownReservation.js";
import { fetchClowns, fetchCompletions, fetchRequests } from "./DataAccess.js";

const mainContainer = document.querySelector("#container");

const render = () => {
    //fetch for the data before rendering to HTML
    fetchRequests()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(() => {
            mainContainer.innerHTML = ClownReservation()
        }
        )
}

render();

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        render();
    }
)
