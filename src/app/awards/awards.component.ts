import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormationService } from './formation.service';
import { Formation } from './formation.model';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

import { AwardListComponent } from './award-list/award-list.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TranslatePipe } from '@ngx-translate/core';
import { TranslateFieldPipe } from '../shared/translate-field.pipe';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    AwardListComponent,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    TranslatePipe,
    TranslateFieldPipe,
  ],
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit, OnDestroy {
  pageName = 'PAGES.AWARDS';

  formations: Formation[] = [];

  subscription!: Subscription;

  isAdmin = signal(false);

  constructor(
    private formationService: FormationService,
    private authService: AuthService,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit(): void {
    this.isAdmin.set(this.authService.isAuthenticated());

    this.onFetchFormationsData();

    this.formations = this.formationService.getFormations();

    this.subscription = this.formationService.formationsChanged.subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      },
    );
  }

  onFetchFormationsData(): void {
    this.dataStorageService.getFormations();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
