import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import localeCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { APP_PROVIDERS } from './app.providers';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { CustomPreset } from './../assets/custom-preset';
registerLocaleData(localeCo);

/**
 * Configuración de la aplicación, Opciones de configuración para bootstrapApplication en main.ts. providers: Proveedores de servicios para la aplicación.
 * @export
 * @class AppConfig
 * @implements {ApplicationConfig}
 * @returns {ApplicationConfig} AppConfig
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: CustomPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, primeng',
          },
        },
      },
    }),
    ...APP_PROVIDERS,
  ],
};
