import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-98',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() ariaLabel: string = ''; // For accessibility
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Type of the button
  @Input() disabled: boolean = false; // Disabled state
  @Input() primary: boolean = false; // Indicate if button is important

  @Output() click = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}  