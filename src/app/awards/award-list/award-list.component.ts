import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AwardItemComponent } from './award-item/award-item.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-award-list',
  standalone: true,
  imports: [
    RouterOutlet,
    AwardItemComponent,
    TranslatePipe,
    NzButtonModule,
    NzIconModule,
  ],
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  formations: Formation[];

  private dataStorageService = inject(DataStorageService);

  // Translations
  headerTitle = 'ADMIN_AWARDS_HEADER.HEADER_TITLE';
  headerSubtitle = 'ADMIN_AWARDS_HEADER.HEADER_SUBTITLE';

  newAwardButtonLabel = 'ADMIN_AWARDS_BUTTONS.NEW_AWARD';
  saveDataButtonLabel = 'ADMIN_AWARDS_BUTTONS.SAVE_DATA';
  fetchDataButtonLabel = 'ADMIN_AWARDS_BUTTONS.FETCH_DATA';

  listTitle = 'ADMIN_AWARD_DETAIL.LIST_TITLE';
  detailsTitle = 'ADMIN_AWARD_DETAIL.DETAILS_TITLE';

  constructor(
    private formationService: FormationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscription = this.formationService.formationsChanged.subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      },
    );

    this.formations = this.formationService.getFormations();
  }

  onNewFormation() {
    this.router.navigate(['new'], {
      relativeTo: this.route,
    });
  }

  onSaveFormationsData() {
    this.dataStorageService.storeFormations().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchFormationsData() {
    this.dataStorageService.getFormations();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
