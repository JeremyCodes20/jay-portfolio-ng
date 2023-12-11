import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jay-portfolio-ng-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css',
})
export class SocialLinksComponent {
   clickGithubLogo() {
    window.location.href = "https://github.com/JeremyCodes20"
   } 

   clickLinkedInLogo() {
    window.location.href = "https://www.linkedin.com/in/jeremy-young-b28a381a7/"
   }
}
