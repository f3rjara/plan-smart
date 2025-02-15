import { APP_INITIALIZER, LOCALE_ID, Provider } from '@angular/core';
import { ThemeUiService } from './core/services/theme/theme-ui.service';

const APP_SERVICES = [ThemeUiService];

export const APP_PROVIDERS: Provider[] = [
  ...APP_SERVICES,
  { provide: LOCALE_ID, useValue: 'es-CO' },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeTheme,
    deps: [ThemeUiService],
    multi: true,
  },
];

function initializeTheme(darkModeService: ThemeUiService) {
  return () => darkModeService.initializeTheme();
}
