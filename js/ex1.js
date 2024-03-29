// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];


// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
// Complete this code so that:


// The house dropdown list is filled during page load.
// The list of characters is shown whenever the user selects a new house in the list.
const popualteSelect = options => {
  const selectElement = document.querySelector("select");
  for (option of options) {
    const optionElement = document.createElement("option");
    optionElement.value = option.code;
    optionElement.textContent = option.name;
    selectElement.appendChild(optionElement);
  }
  return selectElement;
};
selectElement = popualteSelect(houses);
// Add event listener
selectElement.addEventListener("change", e => {
  const characters = getCharacters(selectElement.value);
  const characterListElement = document.getElementById("characters");
  // clear ul
  characterListElement.innerHTML = "";
  // add new characters
  characters.forEach(character => {
    const listElement = document.createElement("li");
    listElement.textContent = character;
    // add li to DOM
    characterListElement.appendChild(listElement);
  });
});
