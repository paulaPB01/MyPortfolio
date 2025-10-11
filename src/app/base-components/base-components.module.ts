import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralPanelComponent } from './lateral-panel/lateral-panel.component';
import { HeaderComponent } from './header/header.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { BarMenuComponent } from './bar-menu/bar-menu.component';

@NgModule({
  declarations: [
    LateralPanelComponent,
    HeaderComponent,
    BarMenuComponent,
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    MenubarModule 
  ],
  exports: [
    LateralPanelComponent,
    HeaderComponent,
    BarMenuComponent
  ]
})
export class BaseComponentsModule { }
