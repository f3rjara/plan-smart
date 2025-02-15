import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import localeCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { APP_PROVIDERS } from './app.providers';
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
    provideAnimations(),
    ...APP_PROVIDERS,
  ],
};
