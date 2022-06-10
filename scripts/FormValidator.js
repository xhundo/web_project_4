class FormValidator {
  constructor(settings, formElements) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElements = formElements;
  }

  _showInputError(input) {
    const errorElement = this._formElements.querySelector(
      "#" + input.id + "-error"
    );
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input, errorMessage) {
    const errorElement = this._formElements.querySelector(
      "#" + input.id + "-error"
    );
    errorElement.textContent = errorMessage;
    input.classList.remove(this._inputErrorClass);
  }

  _hasValidInputs(inputList) {
    return Array.from(inputList).every(
      (input) => input.validity.valid === true
    );
  }

  disableSubmitButton() {
    const submitButton = this._formElements.querySelector(
      this._submitButtonSelector
    );
    submitButton.disabled = true;
    submitButton.classList.add(this._inactiveButtonClass);
  }

  _toggleButton(button, inputList) {
    if (inputList && this._hasValidInputs(inputList)) {
      button.disabled = false;
      button.classList.remove(this._inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(this._inactiveButtonClass);
    }
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _setEventListeners() {
    const inputList = this._formElements.querySelectorAll(this._inputSelector);
    const submitButton = this._formElements.querySelector(
      this._submitButtonSelector
    );
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(input);
        this._toggleButton(submitButton, inputList);
      });
    });
  }

  enableValidation() {
    this._formElements.addEventListener("submit", (e) => e.preventDefault());
    this._setEventListeners(this._formElements);
  }
}

export default FormValidator;
