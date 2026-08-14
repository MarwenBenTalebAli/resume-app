import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Experience } from '../experience.model';
import { TranslateFieldPipe } from '../../shared/translate-field.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    TranslateFieldPipe,
    TranslatePipe,
  ],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss'],
})
export class ExperienceDetailComponent implements OnInit {
  experience: Experience;
  id: number;

  manageExperienceButtonLabel: string =
    'ADMIN_EXPERIENCE_DETAIL_BUTTONS.MANAGE_EXPERIENCE';
  editExperienceButtonLabel: string =
    'ADMIN_EXPERIENCE_DETAIL_BUTTONS.EDIT_EXPERIENCE';
  deleteExperienceButtonLabel: string =
    'ADMIN_EXPERIENCE_DETAIL_BUTTONS.DELETE_EXPERIENCE';

  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.experience = this.experienceService.getExperience(this.id);
    });
  }

  onEditExperience() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteExperience() {
    this.experienceService.deleteExperience(this.id);
    this.router.navigate(['/experiences']);
  }
}
