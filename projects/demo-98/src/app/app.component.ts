import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonComponent } from '../../../angular-98/src/lib/components/button/button.component';
import { DialogComponent } from '../../../angular-98/src/lib/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-98';
}
