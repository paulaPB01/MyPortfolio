import { Component } from '@angular/core';
import { skillsConstants } from 'src/app/constants/info.constants';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
  skillsList = skillsConstants;
}
