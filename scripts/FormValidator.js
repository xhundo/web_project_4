class FormValidator {
  constructor(settings, formElements) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElements = formElements;
  }

  _toggleButton(button, inputList) {
    if (inputList && hasValidInputs(inputList)) {
      button.disabled = false;
      button.classList.remove(this._inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(this._inactiveButtonClass);
    }
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._formElements.querySelector(
      "#" + input.id + "-error"
    );
    errorElement.textContent = errorMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hasValidInputs(inputList) {
    inputList.every((input) => input.validity.valid === true);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      hideInputError(input, this._formElements);
    } else {
      showInputError(input, this._formElements);
    }
  }

  _setEventListeners(inputList, submitButton) {
    inputList = this._formElements.querySelectorAll(this._inputSelector);
    submitButton = this._formElements.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(this._formElements, input);
        toggleButton(this._submitButtonSelector, this._inputList);
      });
    });
  }

  enableValidation() {
    this._formElements.addEventListener("submit", (e) => e.preventDefault());
    this._setEventListeners(this._formElements);
  }
}

export default FormValidator;
