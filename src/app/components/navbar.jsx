"use client";
import React from "react";
import Dropdown from "./dropdown";


  export default function Navbar() {
 
    return (
      <nav class="bg-color-gris opacity-98">
    <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
      <div class="relative flex navbarHeight items-center justify-between">

        <div class="flex flex-1 items-center sm:items-stretch sm:justify-around">

          {/*aca vamos a poner la imagen */}
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="../images/Group.svg" alt="Your Company"/>
          </div>

          {/*aca  van a ir las opciones del navbar */}
          <div class="hidden sm:ml-2 sm:block">
            <div class="flex space-x-7 ">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Community</a>
              <Dropdown />
              <a href="#" class="configButtonLogin text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login/Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/*este es la vista del  movil*/}
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Community</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        <Dropdown />
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login/Register</a>
      </div>
    </div>
  </nav>

    );
  }
