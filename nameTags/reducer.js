const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    console.log(action)

    // const theName = 

    if (type === 'addNameTag') {
        state.push(action.name)
    };

    console.log("=========");
    return state;
}