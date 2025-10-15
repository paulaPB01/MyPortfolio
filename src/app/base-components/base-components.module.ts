import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralPanelComponent } from './lateral-panel/lateral-panel.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LateralPanelComponent,
    BarMenuComponent,
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    MatIconModule
  ],
  exports: [
    LateralPanelComponent,
    BarMenuComponent
  ]
})
export class BaseComponentsModule { }
