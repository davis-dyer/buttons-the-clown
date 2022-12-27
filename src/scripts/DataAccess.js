//Creating an application state object
const applicationState = {
    requests: [],
    clowns: [],
    completions: []
}

const API = "http://localhost:8088"

//fetching for requests
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                applicationState.requests = serviceRequests
            }
        )
}

//fetching for clowns and parsing the json into JS
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (serviceRequests)=> {
                applicationState.clowns = serviceRequests
            }
        )
}

//POST method.. tells the API that we need to post new data into permanent state.
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    
    const mainContainer = document.querySelector('#container')
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
        })
}

//exporting a function that returns the application state of requests. 
export const getRequests = () => {
    return [...applicationState.requests]
}

export const getClowns = () => {
    return [...applicationState.clowns]
}


//Delete request to delete a request
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, {method: "DELETE"})
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

//create a fetch function that fetches for completed requests
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completion) => {
                applicationState.completions = completion
            }
        )
}

//POST request to save the completed request to the API
export const saveCompletion = (completion) => {
    const fetchComplete = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/completions`, fetchComplete)
        .then(response => response.json())
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}