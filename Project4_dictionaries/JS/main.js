//KVPS
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
        // Return the Animal object
        return Animal;
}

function OutputColor() {
    // Get the color value by calling my_Dictionary function
    var animalObject = my_Dictionary();
    var colorValue = animalObject.Color;

// Get the element with the id "Dictionary"
var dictionaryElement = document.getElementById("Dictionary");

// Modify the innerHTML of the element with the color value
dictionaryElement.innerHTML = "Animal Color: " + colorValue;
}
//delete operator to remove a value from your dictionary.
function deleteAndDisplaySound() {
    var Animal = my_Dictionary
    delete Animal.Sound;
// Display the result after deleting the "Sound" property   
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

