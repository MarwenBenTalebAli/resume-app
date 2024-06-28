import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { FormationService } from './formation.service';
import { Formation } from './formation.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AwardListComponent } from './award-list/award-list.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [AwardListComponent],
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit, OnDestroy {
  formations: Formation[];
  subscription: Subscription;
  isAdmin = signal(false);

  constructor(
    private formationService: FormationService,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.isAdmin.set(this.authService.isAuthenticated());
    this.onFetchFormationsData();
    this.formations = this.formationService.getFormations();
    this.subscription = this.formationService.formationsChanged.subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFetchFormationsData() {
    console.log('onFetchFormationsData1234');
    this.dataStorageService.getFormations();
  }
}
