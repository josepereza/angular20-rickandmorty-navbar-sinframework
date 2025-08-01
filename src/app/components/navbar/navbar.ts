import { Component, DOCUMENT, HostListener, Inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
 // Signal para detectar si el usuario ha hecho scroll
  isScrolled = signal(false);
  // Signal para controlar el estado del menú hamburguesa
  isMenuOpen = signal(false);

  // Escucha el evento de scroll en el documento
  @HostListener('document:scroll', [])
  onDocumentScroll() {
    // Si el scroll vertical es mayor a 50px, actualiza el signal
    this.isScrolled.set(document.documentElement.scrollTop > 50);
  }

  // Método para cambiar el estado del menú
  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  // Método para cerrar el menú (útil al hacer clic en un enlace)
  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
