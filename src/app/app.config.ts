import { ApplicationConfig, LOCALE_ID } from '@angular/core';
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
    importProvidersFrom(),
    { provide: LOCALE_ID, useValue: 'es-CO' },
  ],
};
