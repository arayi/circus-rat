// 6: Where in the JSON?

// ```JavaScript
// {
//     "name": "William Shakespeare",
//     "dead" : true,
//     "works" : [
//         {
//             "name" : "Romeo and Juliet",
//             "published" : 1591,
//             "isAwesome" : true
//         },
//         {
//             "name" : "Richard III",
//             "published" : 1592,
//             "isAwesome" : false
//         }
//     ],
//     "favoriteSites" : [
//         "tumblr",
//         "4chan"
//     ]
// }
// ```

// If you wish to find the name of the first play in the list of Shakespeare's works, the "path" to it would look like like this:

// `works -> 0 -> name`

// You would say that the value located at this path is "Romeo and Juliet". The value "tumblr" is located at:

// `favoriteSites -> 0`

// Your task is to find a user-provided key hidden in a JSON object.

// You will be given a JSON object, and you will print out the search path that leads to the value "4chan". You are allowed to use any JSON parsing libraries that you want to.

// **Input:**

// JSON object.

// **Output:**

// The search path for the string in the format shown above (each element should be joined together with `->` between them.). Each element in the path will either be an integer (if indexing a list) or a string (if indexing an object).

const fn = (input) => {
  return input
}

export default fn