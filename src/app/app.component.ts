import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UUCLS';
  isBurgerActive = false;

  @ViewChild('burggerMenuButton') burgerMenuButton?: ElementRef;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  burgerTrigger(): void { 
    this.isBurgerActive = !this.isBurgerActive;

    // !!!FOR TESTING
    console.log(this.isBurgerActive);
  }
}
