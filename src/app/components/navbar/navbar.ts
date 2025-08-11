import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  theme =  localStorage.getItem('theme') || 'light';
  buttonText = this.theme === 'light' ? 'Dark Mode' : 'Light Mode';
  constructor() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
    this.buttonText = this.theme === 'light' ? 'Dark Mode' : 'Light Mode';
  }
}
