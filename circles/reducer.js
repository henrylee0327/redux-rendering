const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    
    const { type } = action;

    // ACTION: Add a random circle
    console.log(action)

    if (type === 'randomCircle') {
        initialState.push({
            radius: 50,
            color: '#FF00FF'
        })
    }
    console.log(state)
    return state;
}

// if (type === 'randomCircle') {
//     return {
//         radius: state.radius * 2,
//         color: state.color
//     }
// }
// return state;
// }