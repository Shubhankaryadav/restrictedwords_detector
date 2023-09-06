// List of restricted words
const restrictedWords = ["porn", "sex", "Taboo"];

// Function to check if a word is restricted
function isRestricted(word) {
  return restrictedWords.includes(word.toLowerCase());
}

// Function to clear input fields
function clearInputFields() {
  const inputFields = document.querySelectorAll("input, textarea");

  inputFields.forEach((field) => {
    if (isRestricted(field.value)) {
      field.value = "";
    }
  });
}

// Listen for user input events
document.addEventListener("input", clearInputFields);
