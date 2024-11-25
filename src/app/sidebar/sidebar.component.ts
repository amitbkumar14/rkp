import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class SidebarComponent {
  @Output() tableSelected = new EventEmitter<string>();

  tables = ['Users', 'Products', 'Orders', 'Customers', 'Inventory'];
  selectedTable: string | null = null;

  selectTable(tableName: string) {
    this.selectedTable = tableName;
    this.tableSelected.emit(tableName);
  }
}

