import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'checkbox-98',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() id: string = ''; // id for the checkbox
  @Input() label: string = ''; // Label text
  @Input() checked: boolean = false; // Whether the checkbox is checked
  @Input() disabled: boolean = false; // Whether the checkbox is disabled

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange() {
    // Emit the new value when the checkbox changes
    this.checkedChange.emit(this.checked);
  }
}
