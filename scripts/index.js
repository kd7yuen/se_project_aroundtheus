// data array
const initialCards = [
  {
    name: "Amsterdam",
    link: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1884&q=80",
  },
  {
    name: "Heathrow Airport",
    link: "https://images.unsplash.com/photo-1585587156830-670bd420de68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "New York City",
    link: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Rijksmuseum",
    link: "https://images.unsplash.com/photo-1589825743636-cd96373c3319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Copenhagen",
    link: "https://images.unsplash.com/photo-1557846978-e801fff1c245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Apple Park",
    link: "https://images.unsplash.com/photo-1591292784843-aa35ebb7897b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
];

    const lists = document.querySelector(".cards");
    const template = document.querySelector("#cardsList").content.querySelector(".cards__block");

initialCards.forEach((card) => {
  getCardElement(card);

  //Grab data that can be reused
  function getCardElement(data) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector(".cards__image");
    const cardTitle = cardElement.querySelector(".cards__title");
    cardImage.src = data.link;
    cardTitle.textContent = data.name;
    cardImage.alt = data.name;
    lists.append(cardElement);
  }
});








//container for modal and modal's form
const modal = document.querySelector(".modal");
const profileEditForm = document.querySelector(".modal__form");

//Buttons and form fill out
const profileEditButton = document.querySelector(".profile__edit");
const modalCloseButton = document.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//form data
const nameInput = profileEditForm.querySelector(".modal__input_type_name");
const jobInput = profileEditForm.querySelector(".modal__input_type_description");

//removes class
function closeModal() {
  modal.classList.remove("modal-open");
}

//adds class
function openModal() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  modal.classList.add("modal-open");
}

//records for when edit button is clicked
profileEditButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal();
}
profileEditForm.addEventListener("submit", handleProfileFormSubmit);


// Declare a getCardElement() function with one parameter named data. You’ll be passing objects of the array to it. The function should:
// clone the template element with all its content and store it in a cardElement variable
// access the card title and image and store them in variables
// set the path to the image to the link field of the object
// set the image alt text to the name field of the object
// set the card title to the name field of the object, too
// return the ready HTML element with the filled-in data
// Iterate over the cards array using a loop, and in each iteration:
// Run your getCardElement() function on the card object to create the HTML element.
// Use the appropriate built-in DOM method to add this HTML element to the page.