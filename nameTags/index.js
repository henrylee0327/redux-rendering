const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const addNameTagInput = document.getElementById("nameForm")

addNameTagInput.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = document.getElementById('inputField').value
    dispatch(
        {type: 'addNameTag',
         name: inputValue
            }
)
});