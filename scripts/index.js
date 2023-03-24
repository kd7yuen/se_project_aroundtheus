// data array
const initialCards = [
  {
    name: "Amsterdam",
    link: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
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
    link: "https://images.unsplash.com/photo-1524046960467-39d55b270f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
];

//Select <ul> for card template to be incorporated into
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card")
  .content.querySelector(".card__block");

function renderCard(cardEl, cardsListContainer) {
  cardsListContainer.prepend(cardEl);
}

// card data
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = cardData.name;
 
  //------------------------------
  //        Like Button
  //------------------------------
  const cardLikeButton = cardElement.querySelector(".card__button_like");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__button_like_active");
  });

  //-------------------------------
  //        Delete Card Button
  //-------------------------------
  const cardRemoveButton = cardElement.querySelector(".card__button_delete");
  cardRemoveButton.addEventListener("click", () => {
    cardElement.remove(cardElement);
  });

  //-------------------------------
  //        Image Modal
  //-------------------------------
  const modalImage = document.querySelector("#modalImage");
  const modalImageCloseButton = modalImage.querySelector("#modalImageCloseBtn");
  const modalImageTitle = modalImage.querySelector(".modal__image_title");
  const modalImageLink = modalImage.querySelector(".modal__image_enlarged");

  cardImage.addEventListener("click", () => {
    openModal(modalImage);
    modalImageLink.src = cardData.link;
    modalImageLink.alt = cardData.name;
    modalImageTitle.textContent = cardData.name;
  });

  modalImageCloseButton.addEventListener("click", () => {
    closeModal(modalImage);
  });
  return cardElement;
}
initialCards.forEach(function (cardData) {
  const cardRender = getCardElement(cardData);
  renderCard(cardRender, cardsList);
});

//-------------------------------
//          Functions
//-------------------------------

//removes modal
function closeModal(modal) {
  modal.classList.remove("modal_open");
  modal.classList.add("modal_close");
}

//opens modal
function openModal(modal) {
  modal.classList.add("modal_open");
}

//Submits profile modal editted user input
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(modalProfile);
}

//Submits New Card modal
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const name = evt.target.newCard_title_input.value;
  const link = evt.target.newCard_link_input.value;
  const cardRender = getCardElement({ name, link });
  renderCard(cardRender, cardsList);
  closeModal(modalAdd);
}
//-------------------------------
//         Profile Edit Modal
//-------------------------------

//Select modal and modal's form
const modalProfile = document.querySelector("#modalEdit");
const modalEditForm = document.querySelector("#modalEditForm");

//Select Edit button
const profileEditButton = document.querySelector(".profile__edit_btn");
const modalEditCloseButton = document.querySelector("#modalEditCloseBtn");

//Select profile title/description to be displayed
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Modal profile user input
const nameInput = modalEditForm.querySelector(".modal__input_type_name");
const descriptionInput = modalEditForm.querySelector(
  ".modal__input_type_description"
);

//EventListener for when buttons are clicked
profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;

  openModal(modalProfile);
});
modalEditCloseButton.addEventListener("click", () => closeModal(modalProfile));

//Submits editted data from user
modalEditForm.addEventListener("submit", handleProfileFormSubmit);

//-------------------------------
//          Add Modal
//-------------------------------

//Select an Add modal and add modal form
const modalAdd = document.querySelector("#modalAdd");
const modalAddForm = document.querySelector("#modalAddForm");

//Select user input for card's image and title
const titleInput = modalAddForm.querySelector(".modal__input_type_title");
const linkInput = modalAddForm.querySelector(".modal__input_type_link");

//Select add modal buttons
const modalAddCloseBtn = document.querySelector("#modalAddCloseBtn");
const profileAddButton = document.querySelector(".profile__add_btn");

//EventListener for add Modal
profileAddButton.addEventListener("click", () => openModal(modalAdd));

modalAddCloseBtn.addEventListener("click", () => closeModal(modalAdd));

//Submits new Card data from user
modalAddForm.addEventListener("submit", handleAddFormSubmit);
