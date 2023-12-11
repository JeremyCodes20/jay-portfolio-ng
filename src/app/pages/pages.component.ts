import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jay-portfolio-ng-pages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export class PagesComponent {}
