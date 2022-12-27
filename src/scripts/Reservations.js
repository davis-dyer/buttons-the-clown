import { getClowns, getRequests, deleteRequest, saveCompletion } from "./DataAccess.js";

export const convertRequestToListElement = (request) => {

    const clowns = getClowns()

    let html = `
    <li>
        <select class="clowns" id="clowns">
                <option value="">Choose</option>
                ${
                    clowns.map(
                        clown => {
                            return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                        }
                    ).join("")
                }
        </select>
        <button class="request__delete" id="request--${request.id}">
            Deny
        </button>
    </li>
    `
    return html
}

export const Requests = () => {

    const requests = getRequests();

    let html = `
    <ul>
        ${
            requests.map(convertRequestToListElement).join("")
        }
    </ul>
    `

    return html

}

const mainContainer = document.querySelector("#container")
//Event listener to delete
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

//event listener to choose a clown

mainContainer.addEventListener(
    "change",
    (event => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const completion = {
                requestIdentifier: requestId,
                clownIdentifier: clownId,
                dateTime: Date.now()
            }
            saveCompletion(completion)
        }
    })
)
