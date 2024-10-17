"use strict";
const btnsModal = document.querySelectorAll(".show-modal"); // Changed to querySelectorAll
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeSelect = document.querySelector(".close-modal");

function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Ensure btnsModal is a NodeList by using querySelectorAll
for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener("click", open);
}

// Close the modal when overlay is clicked
overlay.addEventListener("click", close); // Changed to call close()

// Close the modal when close button is clicked
closeSelect.addEventListener("click", close);
