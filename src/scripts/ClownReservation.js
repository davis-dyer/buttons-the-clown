import { RequestForm } from "./RequestForm.js"
import { Requests } from "./Reservations.js"

export const ClownReservation = () => {
    return `
    <h1>Buttons the Clown Reservation Service</h1>
    <section class="form__container">
        ${RequestForm()}
    </section>

    <section>
        <h2>Reservation Requests</h2>
        ${Requests()}
    </section>
    `
}