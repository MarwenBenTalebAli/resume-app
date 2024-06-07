import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menu: Array<{ routerLink: string, name: string, icon: string }> = [
    {
      routerLink: '/',
      name: 'Accueil',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      routerLink: '/about',
      name: 'À propos',
      icon: '<i class="fas fa-user"></i>'
    },
    {
      routerLink: '/projects',
      name: 'Projets',
      icon: '<i class="fas fa-project-diagram"></i>'
    },
    {
      routerLink: '/experiences',
      name: 'Expérience',
      icon: '<i class="fas fa-compass"></i>'
    },
    {
      routerLink: '/educations',
      name: 'Éducation',
      icon: '<i class="fas fa-graduation-cap"></i>'
    },
    {
      routerLink: '/skills',
      name: 'Compétences',
      icon: '<i class="fas fa-angle-double-right"></i>'
    },
    {
      routerLink: '/interests',
      name: 'Intérêts',
      icon: '<i class="fas fa-id-badge"></i>'
    },
    {
      routerLink: '/awards',
      name: 'Formation',
      icon: '<i class="fas fa-book-open"></i>'
    },
  ]

  constructor(private authService: AuthService, private sanitizer: DomSanitizer) { }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
  }

  sanitizedSvg(svgString: string) {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

}
