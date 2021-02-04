import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { highlightAuto } from 'highlight.js';
import parserTypescript from 'prettier/parser-typescript';
import prettier from 'prettier/standalone';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() menuItems: { [name: string]: MenuItem[] };
  readonly highlightAuto = highlightAuto;
  readonly prettier = prettier;

  get groups(): string[] {
    return Object.keys(this.menuItems);
  }

  constructor() {}

  ngOnInit(): void {}

  format(value: string): string {
    const formatted: string = this.prettier.format(value, {
      semi: false,
      parser: 'typescript',
      plugins: [parserTypescript],
    });
    return this.highlightAuto(`${formatted.slice(1, formatted.length - 1)}()`, ['ts']).value;
  }
}
