import { Component } from '@angular/core';
import { SocialLinksComponent } from './social-links/social-links.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PagesComponent } from './pages/pages.component';

@Component({
  standalone: true,
  imports: [SocialLinksComponent, NavigationBarComponent, PagesComponent],
  selector: 'jay-portfolio-ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jay-portfolio-ng';
}
