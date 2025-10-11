import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IconService } from './services/icons.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'my-portfolio-3';

  constructor(
    private translate: TranslateService,
    private iconService: IconService
  ) {
    // Idioma por defecto si el usuario no tiene preferencia
    translate.setDefaultLang('es');

    // Elegir idioma actual
    translate.use('es');

    // Inicializar el servicio de iconos
    this.iconService.registerIcons()
  }

  ngOnInit(): void {
    // 2. Inicializa AOS en ngOnInit
    AOS.init({
      // Opciones de configuración (opcional, pero recomendado)
      duration: 1000, // Duración de la animación en ms
      once: true,     // Si quieres que la animación solo se ejecute una vez
    });
  }
}
