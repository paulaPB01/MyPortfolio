import { Component, Input } from '@angular/core';
import { BarMenuItem } from 'src/app/share/model/bar-menu.model';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})

export class BarMenuComponent {
  @Input() items: BarMenuItem[] = [];
}
