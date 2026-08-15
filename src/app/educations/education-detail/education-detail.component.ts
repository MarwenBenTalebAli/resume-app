import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { Institut } from '../institut.model';

import { EducationService } from '../education.service';

import { TranslatePipe } from '@ngx-translate/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TranslateFieldPipe } from '../../shared/translate-field.pipe';

@Component({
  selector: 'app-education-detail',
  standalone: true,
  imports: [TranslatePipe, TranslateFieldPipe, NzButtonModule, NzIconModule],
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss'],
})
export class EducationDetailComponent implements OnInit {
  institut: Institut;

  id: number;

  editEducationButtonLabel = 'ADMIN_EDUCATION_DETAIL_BUTTONS.EDIT_EDUCATION';

  deleteEducationButtonLabel =
    'ADMIN_EDUCATION_DETAIL_BUTTONS.DELETE_EDUCATION';

  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;

      this.institut = this.educationService.getInstitut(this.id);
    });
  }

  onEditEducation(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteEducation(): void {
    this.educationService.deleteInstitut(this.id);

    this.router.navigate(['/educations']);
  }
}
