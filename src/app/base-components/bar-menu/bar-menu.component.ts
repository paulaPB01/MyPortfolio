import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})

export class BarMenuComponent {
  @Input() items: MenuItem[] = [];
}
