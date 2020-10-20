// import { createStore } from "redux";
// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);

// export default store;

import {createStore} from "redux"

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}


export function today() {
    return {
        type: "TODAY"
    }
}

export function yesterday() {
    return {
        type: "YESTERDAY"
    }
}



// function reducer(count = 0, action) {
//     switch(action.type) {
//         case "INCREMENT":
//             return count + 1
//         case "DECREMENT":
//             return count - 1
//         default:
//             return count
//     }
// }





function datereducer(startDate = new Date(), action){
    switch(action.type){
        case "TODAY" : 
        return startDate = startDate ;//new Date()
        case "YESTERDAY": 
    }
}

// const store = createStore(reducer)
const store = createStore(datereducer)
store.subscribe(() => console.log(store.getState()))


export default store