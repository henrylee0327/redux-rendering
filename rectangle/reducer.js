const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    
    const newHeight = state.height + 10;
    
    if(type === 'height-button') {
        state.height = newHeight
    };
    // ACTION 2 - Increment width by 10
    const newWidth = state.width + 10;

    if(type === 'width-button') {
       state.width = newWidth
   };
    // ACTION 3 - Change the color
    if(type === 'red-button') {
        state.color = "#FF0000"
   };
    if(type === 'blue-button') {
       state.color = "#0000FF"
   };

    return state;
};