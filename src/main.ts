import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initHighlightingOnLoad, registerLanguage } from 'highlight.js';
import * as typescript from 'highlight.js/lib/languages/typescript';
import { tsLinq } from 'projects/ts-linq/src/index';

if (environment.production) {
  enableProdMode();
}

tsLinq();
registerLanguage('ts', typescript.default);
initHighlightingOnLoad();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
