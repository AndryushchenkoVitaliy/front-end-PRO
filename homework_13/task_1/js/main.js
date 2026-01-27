'use strict';

const form = document.getElementById('contactForm');

const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

const showError = (input, message) => {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = message;
  input.classList.add('error-input');
};

const clearError = (input) => {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = '';
  input.classList.remove('error-input');
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const phoneRegex = /^\+380\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else {
    clearError(nameInput);
  }

  if (messageInput.value.trim().length < 5) {
    showError(messageInput, 'Message must be at least 5 characters');
    isValid = false;
  } else {
    clearError(messageInput);
  }

  if (!phoneRegex.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Phone must start with +380 and contain 9 digits');
    isValid = false;
  } else {
    clearError(phoneInput);
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, 'Invalid email format');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (isValid) {
    console.log({
      name: nameInput.value,
      message: messageInput.value,
      phone: phoneInput.value,
      email: emailInput.value
    });

    form.reset();
  }
});