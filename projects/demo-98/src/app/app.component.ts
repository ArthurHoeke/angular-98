import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//TODO: replace with dist folder instead of library project
import { ButtonComponent } from 'angular-98';
import { DialogComponent } from 'angular-98';

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
