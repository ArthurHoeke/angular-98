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
import { ContainerComponent } from 'angular-98';
import { StatusBarComponent } from 'angular-98';
import { TreeViewComponent } from 'angular-98';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TreeViewComponent, StatusBarComponent, ButtonComponent, DialogComponent, CheckboxComponent, FieldRowComponent, OptionButtonComponent, GroupBoxComponent, ParagraphComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-98';

  public checkboxChecked = false;
  public statusFields: string[] = [
    'first field',
    'second field',
    'third field',
    'fourth field'
  ];

  onCheckedChange(event: boolean) {
    console.log('Checkbox changed:', event); // This will log true or false
  }
  treeData: any[] = [
    { label: 'Table of Contents' },
    { label: 'What is web development?' },
    {
      label: 'CSS',
      children: [
        { label: 'Selectors' },
        { label: 'Specificity' },
        { label: 'Properties' },
      ],
    },
    {
      label: 'JavaScript',
      expanded: true,
      children: [
        { label: 'Avoid at all costs' },
        {
          label: 'Unless',
          children: [
            { label: 'Avoid' },
            {
              label: 'At',
              children: [
                { label: 'Avoid' },
                { label: 'At' },
                { label: 'All' },
                { label: 'Cost' },
              ],
            },
            { label: 'All' },
            { label: 'Cost' },
          ],
        },
      ],
    },
    { label: 'HTML' },
    { label: 'Special Thanks' },
  ];
  
  
}
