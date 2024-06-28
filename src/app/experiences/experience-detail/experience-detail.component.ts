import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Experience } from '../experience.model';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss'],
})
export class ExperienceDetailComponent implements OnInit {
  experience: Experience;
  id: number;

  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router
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
