class FormValidator {
  constructor(settings, formElements) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElements = formElements;
  }

  _toggleButton(button, settings, inputList) {
    if (inputList && hasValidInputs(inputList)) {
      button.disabled = false;
      button.classList.remove(settings.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(settings.inactiveButtonClass);
    }
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector("#" + input.id + "-error");
    errorElement.textContent = errorMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hasValidInputs() {}

  _checkInputValidity() {}

  _setEventListners() {
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        checkInputValidity(this._form, input, settings);
        toggleButton(submitButton, settings, inputList);
      });
    });
  }

  enableValidation() {
    this._formElements.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formEl, settings);
  }
}

export default FormValidator;
