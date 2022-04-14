// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"

import "bootstrap"

Rails.start()
Turbolinks.start()

console.log("Hello from app/javascript/packs/application.js!");

import { initUpdateNavbarOnScroll } from '../components/navbar.js'
import { loadDynamicBannerText } from '../components/banner.js'

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
  loadDynamicBannerText();
});