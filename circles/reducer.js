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
    // console.log(action)

    if (type === 'randomCircle') {
        state.push(generateRandomCircle())
    }
    console.log(action)
    return state;
}



function generateRandomCircle () {
const randomRadius = 10 + Math.random() * 50 
const red = Math.floor(Math.random() * 256)
const green = Math.floor(Math.random() * 256)
const blue = Math.floor(Math.random() * 256)
const randomColor = "#" + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0')
    return ({
        radius: randomRadius,
        color: randomColor
    })
}

// if (type === 'randomCircle') {
//     return {
//         radius: state.radius * 2,
//         color: state.color
//     }
// }
// return state;
// }