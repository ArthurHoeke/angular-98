import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TreeNode {
  label: string;
  expanded?: boolean;
  children?: TreeNode[];
}

@Component({
  selector: 'tree-view-98',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {
  
  @Input() nodes: TreeNode[] = [];
}
