import { Component } from '@angular/core';
import { of } from 'rxjs';
import { TruePipe } from './pipes/true.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [TruePipe]
})
export class AppComponent {
  title = 'defer-observable-async';

  $showContent = of(true);

  stateValue = 'ENABLED';
}
