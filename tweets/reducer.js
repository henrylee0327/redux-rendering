const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
]
;

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    
    // ACTION 1 - Sort by # likes
    if (type === 'likes') {
        state.sort((a, b) => {
            if (a.likes < b.likes) return 1
            else if (a.likes > b.likes) return -1
            else return 0
        })
    };

    // ACTION 2 - Sort by # retweets
    if(type === 'retweets') {
        state.sort((a, b) => {
            if (a.retweets < b.retweets) return 1
            else if (a.retweets > b.retweets) return -1
            else return 0
        })
    };

    // ACTION 3 - Sort by # replies
    if(type === 'replies') {
        state.sort((a, b) => {
            if (a.replies < b.replies) return 1
            else if (a. replies > b.replies) return -1
            else return 0
        })
    };    
    console.log(state);
    return state;
}