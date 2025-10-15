import { Component } from '@angular/core';
import { skillsConstants } from 'src/app/share/constants/info.constants';
import { SkillGroup } from 'src/app/share/model/dynamic-bar.model';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
  skillsList: SkillGroup[] = skillsConstants;
}
