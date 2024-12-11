import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'group-box-98',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './group-box.component.html',
  styleUrl: './group-box.component.css'
})
export class GroupBoxComponent {
  @Input() label: string = '';
  @Input() showLabel: boolean = false;
}
