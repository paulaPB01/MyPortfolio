import { NgModule } from "@angular/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { DynamicBarComponent } from "./dynamic-bar/dynamic-bar.component";
import { LandscapeAnimationComponent } from "./landscape-animation/landscape-animation.component";
import { ScrollAnimationDirective } from './directive/scroll-animation.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DynamicBarComponent,
    LandscapeAnimationComponent,
    ScrollAnimationDirective
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    DynamicBarComponent,
    LandscapeAnimationComponent,
    ScrollAnimationDirective
  ]
})

export class ShareModule { }