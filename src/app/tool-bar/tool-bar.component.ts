import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  @Input() menuItems: { [name: string]: MenuItem[] };

  get groups(): string[] {
    return Object.keys(this.menuItems);
  }

  constructor() {}

  ngOnInit(): void {}
}
