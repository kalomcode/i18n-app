import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [RouterLink, LanguageSelectorComponent, TranslateModule],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent {}
