import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'dialog-98',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() title: string = 'Dialog Title';
  @Input() description: string | null = null;
  @Input() visible: boolean = false;
  @Input() width: number = 250;
  @Input() showControls: boolean = true;
  @Input() showConfirm: boolean = true;
  @Input() showCancel: boolean = true;
  @Input() confirmText: string = 'OK';
  @Input() cancelText: string = 'Cancel';

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() minimize = new EventEmitter<void>();
  @Output() maximize = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  onMinimize() {
    this.minimize.emit();
  }

  onMaximize() {
    this.maximize.emit();
  }
}