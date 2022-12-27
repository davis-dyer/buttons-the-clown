import { sendRequest } from "./DataAccess.js"



export const RequestForm = () => {
    let html = `
    <div className="field">
        <label htmlFor="parentName" className="label">Parent Name</label>
        <input type="text" name="parentName" className="input" />
    </div>
    <div className="field">
        <label htmlFor="childName" className="label">Child Name</label>
        <input type="text" name="childName" className="input" />
    </div>
    <div className="field">
        <label htmlFor="numOfChildren" className="label">How Many Children?</label>
        <input type="number" name="numOfChildren" className="input" />
    </div>
    <div className="field">
        <label htmlFor="address" className="label">Address</label>
        <input type="text" name="address" className="input" />
    </div>
    <div className="field">
        <label htmlFor="date" className="label">Date of Event</label>
        <input type="date" name="date" className="input" />
    </div>
    <div className="field">
        <label htmlFor="time" className="label">Reservation Length</label>
        <input type="number" name="time" className="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}


//making a variable for events under the main container class in index.html
const mainContainer = document.querySelector('#container')

//Adding an event listener for clicks
mainContainer.addEventListener(
    "click",
    (newEvent) => {
        if (newEvent.target.id === 'submitRequest') {
            const userParentName = document.querySelector("input[name='parentName']").value
            const userChildName = document.querySelector("input[name='childName']").value
            const userChildrenNum = document.querySelector("input[name='numOfChildren']").value
            const userAddress = document.querySelector("input[name='address']").value
            const userDate = document.querySelector("input[name='date']").value
            const userTime = document.querySelector("input[name='time']").value

            const dataToSendToAPI = {
                parentName: userParentName,
                childName: userChildName,
                numOfChildren: userChildrenNum,
                address: userAddress,
                date: userDate,
                time: userTime
            }
            sendRequest(dataToSendToAPI)
        }
    }
)