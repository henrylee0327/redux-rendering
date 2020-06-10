const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const heightBtn = document.getElementById('height');
const widthBtn = document.getElementById('width');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');

heightBtn.addEventListener('click', () => {
    dispatch({
        type: 'height-button'
    })
});

widthBtn.addEventListener('click', () => {
    dispatch({
        type: 'width-button'
    })
});

redBtn.addEventListener('click', () => {
    dispatch({
        type: 'red-button'
    })
});

blueBtn.addEventListener('click', () => {
    dispatch({
        type: 'blue-button'
    })
});