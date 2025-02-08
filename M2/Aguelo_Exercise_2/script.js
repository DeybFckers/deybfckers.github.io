const userData = '{"fullName": "Christian Dave Aguelo", "userAge": 20, "hobbies":["Playing"]}';
const userObject = JSON.parse(userData);

console.log(userObject.fullName);
console.log(userObject.userAge);

// Convert back to JSON string
const newUserData = JSON.stringify(userObject);
console.log(newUserData);

// Update the HTML with user data
document.getElementById("fullName").innerHTML = `<b>Name</b>: ${userObject.fullName}`;
document.getElementById("userAge").innerHTML = `<b>Age</b>: ${userObject.userAge}`;

const hobbyList = document.getElementById("hobbyList");
userObject.hobbies.forEach(hobby => {
    hobbyList.innerHTML += `<li>${hobby}</li>`;
});
