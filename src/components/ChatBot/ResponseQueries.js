const queries = [
    ["how are you", "how is life", "how are things"],
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
];
   
// Possible responses corresponding to triggers
const answers = [
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
];

// For any other user input
const alternatives = [
    "Go on...",
    "Try again",
];

export { queries, answers, alternatives }