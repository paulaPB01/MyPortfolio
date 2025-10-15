import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(
    private translate: TranslateService,
  ) {
    // Idioma por defecto si el usuario no tiene preferencia
    translate.setDefaultLang('es');

    // Elegir idioma actual
    translate.use('es');
  }
}
