import { Component, Input } from '@angular/core';

@Component({
  selector: 'checkbox-98',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() id: string = ''; // id for the checkbox
  @Input() label: string = ''; // Label text
  @Input() checked: boolean = false; // Whether the checkbox is checked
  @Input() disabled: boolean = false; // Whether the checkbox is disabled
}