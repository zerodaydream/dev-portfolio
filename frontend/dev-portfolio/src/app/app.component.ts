import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeTerminalComponent } from './components/welcome-terminal/welcome-terminal.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ScrollTriggerDirective } from './directives/scroll-trigger/scroll-trigger.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeTerminalComponent,
    AboutMeComponent,
    ScrollTriggerDirective,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAboutMe = false;

  onRevealAboutMe() {
    this.showAboutMe = true;
  }
}