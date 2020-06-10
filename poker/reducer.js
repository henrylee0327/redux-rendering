const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)


        const values = [2,3,4,5,6,7,8,9,10,'A','K','Q','J'];
        const suit = ['C','D','H','S'];
    
        const randomValue = values[Math.floor(Math.random() * values.length)];
        const randomSuit = suit[Math.floor(Math.random() * suit.length)];

        // console.log(randomSuit);
        
        function newCard () {
            return ({
                value: randomValue,
                suit: randomSuit
            })
        };
        console.log(newCard());

        if(type === 'card1') {
            state.splice(0, 1, newCard())
        };
    
        if(type === 'card2') {
            state.splice(1, 1, newCard())
        };



    console.log(state);

    return state;
}
