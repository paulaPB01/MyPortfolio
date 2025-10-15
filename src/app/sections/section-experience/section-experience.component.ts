import { Component } from '@angular/core';
import { experienceFormationConstants } from 'src/app/share/constants/info.constants';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss']
})
export class SectionExperienceComponent {
  items = experienceFormationConstants;
}
