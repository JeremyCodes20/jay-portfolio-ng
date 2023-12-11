import { Route } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const appRoutes: Route[] = [
    {path: '', redirectTo: '/about-me', pathMatch: 'full'},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'resume', component: ResumeComponent},
];
