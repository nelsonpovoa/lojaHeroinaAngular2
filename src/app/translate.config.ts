import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translateConfig(): TranslateModuleConfig {
  return {
    defaultLanguage: 'pt',

    loader: {
      provide: TranslateLoader,
      useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
      deps: [HttpClient]
    }
  };
}
