import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FieldRowComponent } from '../field-row/field-row.component';

@Component({
  selector: 'option-button-98',
  standalone: true,
  imports: [FormsModule, CommonModule, FieldRowComponent],
  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.css'
})
export class OptionButtonComponent {
  @Input() identifier: string = `option-${Math.random().toString(36).substr(2, 9)}`;
  @Input() label: string = ''; // Label text
  @Input() checked: boolean = false; // Whether the checkbox is checked
  @Input() disabled: boolean = false; // Whether the checkbox is disabled

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange() {
    // Emit the new value when the checkbox changes
    this.checkedChange.emit(this.checked);
  }
}
