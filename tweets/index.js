const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const sortLikesBtn = document.getElementById('sortLikes')
const sortRetweetsBtn = document.getElementById('sortRetweets')
const sortRepliesBtn = document.getElementById('sortReplies')

sortLikesBtn.addEventListener('click', () => {
    dispatch({
        type: 'likes'
    })
});

sortRetweetsBtn.addEventListener('click', () => {
    dispatch({
        type: 'retweets'
    })
});

sortRepliesBtn.addEventListener('click', () => {
    dispatch({
        type: 'replies'
    })
});