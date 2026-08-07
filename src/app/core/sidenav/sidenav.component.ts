import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TranslatePipe } from '@ngx-translate/core';

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
    TranslatePipe,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menu: Array<{
    routerLink: string;
    label: string;
    icon: string;
    iconName: string;
  }> = [
    {
      routerLink: '/',
      // name: 'Accueil',
      label: 'SIDENAV.HOME',
      icon: '<i class="fas fa-home"></i>',
      iconName: 'home',
    },
    {
      routerLink: '/about',
      // name: 'À propos',
      label: 'SIDENAV.ABOUT',
      icon: '<i class="fas fa-user"></i>',
      iconName: 'user',
    },
    {
      routerLink: '/projects',
      // name: 'Projets',
      label: 'SIDENAV.PROJECTS',
      icon: '<i class="fas fa-project-diagram"></i>',
      iconName: 'project',
    },
    {
      routerLink: '/experiences',
      // name: 'Expérience',
      label: 'SIDENAV.EXPERIENCES',
      icon: '<i class="fas fa-compass"></i>',
      iconName: 'compass',
    },
    {
      routerLink: '/educations',
      // name: 'Éducation',
      label: 'SIDENAV.EDUCATIONS',
      icon: '<i class="fas fa-graduation-cap"></i>',
      iconName: 'file-done',
    },
    {
      routerLink: '/skills',
      // name: 'Compétences',
      label: 'SIDENAV.SKILLS',
      icon: '<i class="fas fa-angle-double-right"></i>',
      iconName: 'double-right',
    },
    {
      routerLink: '/interests',
      // name: 'Intérêts',
      label: 'SIDENAV.INTERESTS',
      icon: '<i class="fas fa-id-badge"></i>',
      iconName: 'ant-design',
    },
    {
      routerLink: '/awards',
      // name: 'Formation',
      label: 'SIDENAV.AWARDS',
      icon: '<i class="fas fa-book-open"></i>',
      iconName: 'book',
    },
  ];

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
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
