import { NgModule } from "@angular/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { DynamicBarComponent } from "./components/dynamic-bar/dynamic-bar.component";
import { LandscapeAnimationComponent } from "./components/landscape-animation/landscape-animation.component";
import { ScrollAnimationDirective } from './directive/scroll-animation.directive';
import { BarMenuComponent } from "./components/bar-menu/bar-menu.component";
import { MatIconModule } from "@angular/material/icon";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DynamicBarComponent,
    LandscapeAnimationComponent,
    ScrollAnimationDirective,
    BarMenuComponent,
    DynamicBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
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
    ScrollAnimationDirective,
    BarMenuComponent,
    DynamicBarComponent
  ]
})

export class ShareModule { }