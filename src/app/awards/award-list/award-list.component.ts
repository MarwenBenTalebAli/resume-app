import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AwardItemComponent } from './award-item/award-item.component';

@Component({
  selector: 'app-award-list',
  standalone: true,
  imports: [RouterOutlet, AwardItemComponent],
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  formations: Formation[];
  private dataStorageService = inject(DataStorageService);

  constructor(
    private formationService: FormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.formationService.formationsChanged.subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      }
    );
    this.formations = this.formationService.getFormations();
  }

  onNewFormation() {
    this.router.navigate(['new'], { relativeTo: this.route });
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
