import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  @Input() name: string = 'Dialog Title';
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

  public isMaximized = false;

  public position = { x: 0, y: 0 }; // Default position

  private dragging = false;
  private offset = { x: 0, y: 0 };

  ngOnChanges(): void {
    if (this.visible) {
      this.centerWindow(); // Center the dialog when it becomes visible
    }
  }

  centerWindow() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.position.x = (windowWidth - this.width) / 2;
    this.position.y = (windowHeight - 200) / 2; // Adjust height (200px assumed as height of the dialog)
  }

  startDragging(event: MouseEvent): void {
    if (this.isMaximized) return; // Don't allow dragging when maximized

    this.dragging = true;
    this.offset.x = event.clientX - this.position.x;
    this.offset.y = event.clientY - this.position.y;
  }

  @HostListener('window:mousemove', ['$event'])
  onDragging(event: MouseEvent): void {
    if (!this.dragging) return;

    this.position.x = event.clientX - this.offset.x;
    this.position.y = event.clientY - this.offset.y;
  }

  @HostListener('window:mouseup')
  stopDragging(): void {
    this.dragging = false;
  }

  onMaximize(): void {
    this.isMaximized = !this.isMaximized;
  }

  onClose(): void {
    this.close.emit();
    this.visible = false;
  }

  onConfirm(): void {
    this.confirm.emit();
    this.visible = false;
  }

  onCancel(): void {
    this.cancel.emit();
    this.visible = false;
  }

  onMinimize(): void {
    this.minimize.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    if (this.visible) {
      this.onCancel();
    }
  }
}