import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollOffset = window.scrollY  || 0;

    console.log(scrollOffset)
    if ( scrollOffset ) {
      this.isScrolled = false;
    } else {
      this.isScrolled = true;
    }
  }
  isScrolled: boolean = true;
}
