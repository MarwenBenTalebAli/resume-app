import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menu: Array<{
    routerLink: string;
    name: string;
    icon: string;
    iconName: string;
  }> = [
    {
      routerLink: '/',
      name: 'Accueil',
      icon: '<i class="fas fa-home"></i>',
      iconName: 'home',
    },
    {
      routerLink: '/about',
      name: 'À propos',
      icon: '<i class="fas fa-user"></i>',
      iconName: 'user',
    },
    {
      routerLink: '/projects',
      name: 'Projets',
      icon: '<i class="fas fa-project-diagram"></i>',
      iconName: 'project',
    },
    {
      routerLink: '/experiences',
      name: 'Expérience',
      icon: '<i class="fas fa-compass"></i>',
      iconName: 'compass',
    },
    {
      routerLink: '/educations',
      name: 'Éducation',
      icon: '<i class="fas fa-graduation-cap"></i>',
      iconName: 'file-done',
    },
    {
      routerLink: '/skills',
      name: 'Compétences',
      icon: '<i class="fas fa-angle-double-right"></i>',
      iconName: 'double-right',
    },
    {
      routerLink: '/interests',
      name: 'Intérêts',
      icon: '<i class="fas fa-id-badge"></i>',
      iconName: 'ant-design',
    },
    {
      routerLink: '/awards',
      name: 'Formation',
      icon: '<i class="fas fa-book-open"></i>',
      iconName: 'book',
    },
  ];

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {}

  sanitizedSvg(svgString: string) {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
}
