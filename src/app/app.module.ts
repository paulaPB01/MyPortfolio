import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InitPageComponent } from './init-page/init-page.component';
import { RouterOutlet } from '@angular/router';
import { BaseComponentsModule } from './base-components/base-components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SectionModule } from './sections/section.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LandscapeAnimationComponent } from './share/landscape-animation/landscape-animation.component';
import { DynamicBarComponent } from './share/dynamic-bar/dynamic-bar.component';
import { share } from 'rxjs';
import { SharedModule } from 'primeng/api';
import { ShareModule } from './share/share.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    InitPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    RouterOutlet,
    BaseComponentsModule,
    HttpClientModule,
    SectionModule,
    MatIconModule,
    CommonModule,
    ShareModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    DynamicBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
