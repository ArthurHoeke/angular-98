import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//TODO: replace with dist folder instead of library project
import { ButtonComponent } from 'angular-98';
import { DialogComponent } from 'angular-98';
import { CheckboxComponent } from 'angular-98';
import { FieldRowComponent } from 'angular-98';
import { OptionButtonComponent } from 'angular-98';

import { GroupBoxComponent } from 'angular-98';
import { ParagraphComponent } from 'angular-98';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ButtonComponent, DialogComponent, CheckboxComponent, FieldRowComponent, OptionButtonComponent, GroupBoxComponent, ParagraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-98';

  public checkboxChecked = false;

  onCheckedChange(event: boolean) {
    console.log('Checkbox changed:', event); // This will log true or false
  }
  
  test() {
    alert("asdf")
  }
}
