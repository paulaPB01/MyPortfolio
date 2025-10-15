import { Component } from '@angular/core';
import { aboutMeConstants, personalInformationConstant } from 'src/app/share/constants/info.constants';


@Component({
  selector: 'app-section-about-me',
  templateUrl: './section-about-me.component.html',
  styleUrls: ['./section-about-me.component.scss']
})
export class SectionAboutMeComponent {
  personalInformationConstant = personalInformationConstant;
  aboutMeConstants = aboutMeConstants;
}
