
var genButton = document.querySelector("#genButton");
var inputPwd = document.querySelector("#pwd");

genButton.addEventListener("click", askPassword);


function askPassword(){

    var letters = "abcdefghijklmnopqrstuvwxyzABDCEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%&*-_+=?;:.,";

    var length = prompt("How long would you like your password to be? (between 8 and 128 characters)");

    if (length === null){
        return;
    }
    while (length < 8 || length > 128) {
        alert("password must be between 8 and 128 characters");
        length = prompt("How long would you like your password to be? (between 8 and 128 characters)");

    }

    var numRequest = confirm("Do you want numbers in your password?");
    var specialRequest = confirm("Do you want special characters in your password?");



    if (numRequest){
        var characters = letters;
        characters += numbers;

        generatePassword()
        inputPwd.textContent = password;
    }

    else if (specialRequest){
        characters += letters;
        characters += special;

        generatePassword()
        inputPwd.textContent = password;
    }

    if (numRequest && specialRequest){
        characters += letters;
        characters += special;
        characters += numbers;

        generatePassword()
        inputPwd.textContent = password;
    }

    else{
        characters += letters;

        generatePassword()
        inputPwd.textContent = password;
    };

    function generatePassword() {
        password ="";
        for (var i = 0, n = characters.length; i < length; ++i) {
            password += characters.charAt(Math.floor(Math.random() * n));
        }
        return password;
        
    }

    console.log("The password is", password);

    }
