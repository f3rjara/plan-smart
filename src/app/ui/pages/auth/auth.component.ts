import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { ThemeUiService } from '@services/theme/theme-ui.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ThemeMode } from '@interfaces/theme-ui.interface';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public themeUiService = inject(ThemeUiService);
  statusTheme = this.themeUiService.themeMode() === ThemeMode.D;
  theme = new FormControl(this.themeUiService.themeMode() === ThemeMode.D);

  constructor() {
    effect(() => {
      const currentTheme = this.themeUiService.themeMode();
      this.theme.setValue(currentTheme === ThemeMode.D, { emitEvent: false });
    });
  }

  checkValue() {
    console.log(this.theme.value);
    this.themeUiService.toggleTheme();
  }

  themeBySystem() {
    this.themeUiService.themeBySystem();
  }
}
