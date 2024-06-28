import { Component, OnInit } from '@angular/core';
import { Institut } from '../institut.model';
import { EducationService } from '../education.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-education-detail',
  standalone: true,
  imports: [],
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss'],
})
export class EducationDetailComponent implements OnInit {
  institut: Institut;
  id: number;

  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.institut = this.educationService.getInstitut(this.id);
    });
  }

  onEditEducation() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteEducation() {
    this.educationService.deleteInstitut(this.id);
    this.router.navigate(['/educations']);
  }
}
