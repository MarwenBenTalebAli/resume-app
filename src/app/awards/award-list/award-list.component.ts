import { Component, OnInit, OnDestroy } from '@angular/core';
import { Formation } from '../formation.model';
import { FormationService } from '../formation.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.scss']
})
export class AwardListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  formations: Formation[];

  constructor(
    private formationService: FormationService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
    this.dataStorageService.storeFormations()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchFormationsData() {
    this.dataStorageService.getFormations();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
