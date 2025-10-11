import { NgModule } from "@angular/core";
import { SectionAboutMeComponent } from "./section-about-me/section-about-me.component";
import { SectionExperienceComponent } from "./section-experience/section-experience.component";
import { SectionSkillsComponent } from "./section-skills/section-skills.component";
import { SectionContactComponent } from "./section-contact/section-contact.component";
import { SectionProyectsComponent } from "./section-proyects/section-proyects.component";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { AppModule } from "../app.module";
import { ShareModule } from "../share/share.module";
import { MatIconModule } from "@angular/material/icon";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SectionAboutMeComponent,
    SectionSkillsComponent,
    SectionExperienceComponent,
    SectionProyectsComponent,
    SectionContactComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatIconModule
  ],
  exports: [
    SectionAboutMeComponent,
    SectionSkillsComponent,
    SectionExperienceComponent,
    SectionProyectsComponent,
    SectionContactComponent,
  ]
})

export class SectionModule { }