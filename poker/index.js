const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const btnEl1 = document.getElementById('card1Button')
const btnEl2 = document.getElementById('card2Button')

btnEl1.addEventListener("click", () => {
    dispatch({
        type: "card1"
    })
})

btnEl2.addEventListener("click", () => {
    dispatch({
        type: "card2"
    })  
})