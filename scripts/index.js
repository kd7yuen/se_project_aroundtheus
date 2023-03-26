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

// Variables

//Select <ul> for card template to be incorporated into
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card")
  .content.querySelector(".card__block");

//Select Image Popup
const modalImage = document.querySelector("#modalImage");
const modalImageCloseButton = modalImage.querySelector("#modalImageCloseBtn");
const modalImageTitle = modalImage.querySelector(".modal__image-title");
const modalImageLink = modalImage.querySelector(".modal__image-enlarged");

//Select Edit popup
const editProfileModal = document.querySelector("#modalEdit");
const editProfileModalForm = document.querySelector("#modalEditForm");

//Select Edit button and close button
const profileEditButton = document.querySelector(".profile__edit");
const profileEditCloseButton = document.querySelector("#modalEditCloseBtn");

//Select profile title/description to be displayed
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Modal profile user input
const nameInput = editProfileModalForm.querySelector(".modal__input_type_name");
const descriptionInput = editProfileModalForm.querySelector(
  ".modal__input_type_description"
);

//Select an Add modal and add modal form
const cardAddModal = document.querySelector("#cardAddModal");
const cardAddForm = document.querySelector("#cardAddForm");

//Select user input for card's image and title
const titleInput = cardAddForm.querySelector(".modal__input_type_title");
const linkInput = cardAddForm.querySelector(".modal__input_type_link");

//Select add modal buttons
const addCardModalCloseButton = document.querySelector("#modalAddCloseBtn");
const addCardButton = document.querySelector(".profile__add");

//-------------------------------
//          Functions
//-------------------------------

//close modal
function closeModal(modal) {
  modal.classList.remove("modal_open");
}

//opens modal
function openModal(modal) {
  modal.classList.add("modal_open");
}

function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

//Submits profile modal editted user input
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfileModal);
}

//Submits New Card modal
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const name = evt.target.newCard_title_input.value;
  const link = evt.target.newCard_link_input.value;
  const cardElements = getCardElement({ name, link });
  renderCard(cardElements, cardsList);
  cardAddForm.reset();
  closeModal(cardAddModal);
}

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

  const cardLikeButton = cardElement.querySelector(".card__button_like");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__button_like_active");
  });

  const cardRemoveButton = cardElement.querySelector(".card__button_delete");
  cardRemoveButton.addEventListener("click", () => {
    cardElement.remove(cardElement);
  });

  function PopupImage() {
    modalImageLink.src = cardData.link;
    modalImageLink.alt = cardData.name;
    modalImageTitle.textContent = cardData.name;
  }

  function OpenPopupImage() {
    PopupImage();
    openModal(modalImage);
  }

  cardImage.addEventListener("click", () => {
    OpenPopupImage();
  });

  return cardElement;
}

initialCards.forEach(function (cardData) {
  const cardElements = getCardElement(cardData);
  renderCard(cardElements, cardsList);
});

//EventListener for when buttons are clicked
profileEditButton.addEventListener("click", () => {
  openEditProfileModal();
});

addCardButton.addEventListener("click", () => openModal(cardAddModal));

profileEditCloseButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);

addCardModalCloseButton.addEventListener("click", () =>
  closeModal(cardAddModal)
);

modalImageCloseButton.addEventListener("click", () => {
  closeModal(modalImage);
});

addCardButton.addEventListener("click", () => openModal(cardAddModal));

cardAddForm.addEventListener("submit", handleAddFormSubmit);

editProfileModalForm.addEventListener("submit", handleProfileFormSubmit);
