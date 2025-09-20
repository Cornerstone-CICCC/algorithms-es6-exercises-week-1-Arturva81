/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

let facebookProfile = {
    name: "Elmer Balbin",
    numberOfFriends: 495,
    postedMessages: [
        "This is my first message!", "This is another cool message!", "Omg a third one"
    ],
    postMessage: function(newMessage) {
        this.postedMessages.push(newMessage);
    },
    deleteMessage: function(index) {
        this.postedMessages.splice(index, 1);
    },
    addFriend: function() {
        this.numberOfFriends += 1;
    },
    removeFriend: function() {
        this.numberOfFriends -= 1;
    }
}


facebookProfile.postMessage("This is yet another cool post");
facebookProfile.deleteMessage(2);
facebookProfile.removeFriend();

console.log(facebookProfile.postedMessages);
console.log(facebookProfile.numberOfFriends);