const settings = {
  formSelector: ".modal__form, .modal-place__form",
  inputSelector: ".modal__input, .modal-place__input",
  submitButtonSelector: ".modal__submit, .modal-place__submit",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error-text_visible",
};

const showInputError = (input, formEl, settings) => {
  const errorElement = formEl.querySelector("#" + input.id + "-error");
  errorElement.textContent = input.validationMessage;
  input.classList.add(settings.inputErrorClass);
};

const hideInputError = (input, formEl) => {
  const errorElement = formEl.querySelector("#" + input.id + "-error");
  errorElement.textContent = "";
  input.classList.remove(settings.inputErrorClass);
};

const checkInputValidity = (formEl, input) => {
  if (input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};

const hasValidInputs = (inputList) =>
  inputList.every((input) => input.validity.valid === true);

const toggleButton = (button, settings, inputList) => {
  if (inputList && hasValidInputs(inputList)) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
};

setEventListeners = (formEl) => {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  const submitButton = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
      toggleButton(submitButton, settings, inputList);
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formEl, settings);
  });
};

enableValidation(settings);
