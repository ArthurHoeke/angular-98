import { Component, Input } from '@angular/core';

@Component({
  selector: 'container-98',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @Input() name: string = 'Container Title';
}
