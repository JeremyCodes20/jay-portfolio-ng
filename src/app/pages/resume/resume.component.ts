import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'jay-portfolio-ng-resume',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  pdfSrc = "../../../assets/files/Resume-JeremyYoung2022.pdf"
}
