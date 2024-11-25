import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../table/table.component';

interface Tab {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
  imports: [CommonModule, TableComponent],
  standalone: true
})
export class TabContainerComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTabName: string | null = null;
  @Output() closeTab = new EventEmitter<number>();
  @Output() setActiveTab = new EventEmitter<number>();

  onCloseTab(tabId: number, event: Event) {
    event.stopPropagation();
    this.closeTab.emit(tabId);
  }
}

