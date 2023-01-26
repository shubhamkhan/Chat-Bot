const queries = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
];
   
// Possible responses corresponding to triggers
const answers = [
    [
        {
            message: "Hello!",
            type: "Link",
            url: "https://github.com/shubhamkhan",
            action: [],
        },
        {
            message: "Hi!",
            type: "Video",
            url: "rokGy0huYEA",
            action: [],
        },
        {
            message: "Hey!",
            type: "List",
            url: "",
            action: ["hi", "hey", "hello", "good morning", "good afternoon are you human or bot"],
        },
        {
            message: "Hi there!",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Fine... how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Pretty well, how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Fantastic, how are you?",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Nothing much",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "About to go to sleep",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Can you guess?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I don't know actually",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I am infinite",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I am just a bot",
            url: "",
            type: "",
            action: [],
        },{
            message: "I am a bot. What are you?",
            url: "",
            type: "",
            action: [],
        }
    ],
];

// For any other user input
const alternatives = [
    {
        message: "Go on...",
        url: "",
        type: "",
        action: [],
    },
    {
        message: "Try again",
        url: "",
        type: "",
        action: [],
    }
];

export { queries, answers, alternatives }