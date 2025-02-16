import { Injectable, signal, effect } from '@angular/core';
import { IThemeMode, ThemeMode } from '@interfaces/theme-ui.interface';

@Injectable({
  providedIn: 'root',
})
export class ThemeUiService {
  private storageKey = 'theme-mode';
  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  themeMode = signal<IThemeMode>(this.getInitialTheme());

  constructor() {
    this.applyTheme(this.themeMode());
    this.mediaQuery.addEventListener('change', this.handleSystemThemeChange.bind(this));
    effect(() => this.applyTheme(this.themeMode()));
  }

  initializeTheme(): void {
    this.themeMode.set(this.getInitialTheme());
  }

  toggleTheme(): void {
    const newTheme: IThemeMode = this.themeMode() === ThemeMode.D ? ThemeMode.L : ThemeMode.D;
    this.themeMode.set(newTheme);
    localStorage.setItem(this.storageKey, this.themeMode());
  }

  themeBySystem(): void {
    localStorage.removeItem(this.storageKey);
    this.initializeTheme();
  }

  private getInitialTheme(): IThemeMode {
    const storedTheme = localStorage.getItem(this.storageKey);
    return storedTheme ? (storedTheme as IThemeMode) : this.mediaQuery.matches ? ThemeMode.D : ThemeMode.L;
  }

  private applyTheme(theme: IThemeMode): void {
    const isDarkMode = theme === ThemeMode.D;
    document.documentElement.classList.toggle(ThemeMode.D, isDarkMode);
    document.body.classList.toggle(ThemeMode.D, isDarkMode);
  }

  private handleSystemThemeChange(event: MediaQueryListEvent): void {
    if (!localStorage.getItem(this.storageKey)) {
      this.themeMode.set(event.matches ? ThemeMode.D : ThemeMode.L);
    }
  }
}
