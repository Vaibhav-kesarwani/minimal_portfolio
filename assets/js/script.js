"use strict";

// element toggle function
const elementToggleFunction = function (element) {
  element.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() {
    elementToggleFunction(sidebar);
});