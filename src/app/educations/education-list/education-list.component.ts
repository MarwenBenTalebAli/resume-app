import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Institut } from '../institut.model';
import { EducationService } from '../education.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { EducationItemComponent } from './education-item/education-item.component';

@Component({
  selector: 'app-education-list',
  standalone: true,
  imports: [RouterOutlet, EducationItemComponent],
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss'],
})
export class EducationListComponent implements OnInit, OnDestroy {
  instituts: Institut[];
  subscription: Subscription;

  constructor(
    private educationService: EducationService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.educationService.institutsChanged.subscribe(
      (instituts: Institut[]) => {
        this.instituts = instituts;
      }
    );
    this.instituts = this.educationService.getInstituts();
  }

  onNewEducation() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSaveEducationsData() {
    this.dataStorageService.storeEducations().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchEducationsData() {
    this.dataStorageService.getEducations();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
