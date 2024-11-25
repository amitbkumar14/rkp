import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

interface TableData {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class TableComponent implements OnChanges {
  @Input() tableName: string = '';
  @Input() active: boolean = false;

  tableData: TableData[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if ((changes['active'] && this.active) || changes['tableName']) {
      this.loadData();
    }
  }

  loadData() {
    this.tableData = this.getDummyData(this.tableName);
  }

  getDummyData(tableName: string): TableData[] {
    const dummyData: { [key: string]: TableData[] } = {
      'Users': [
        { id: 1, name: 'John Doe', description: 'Admin user' },
        { id: 2, name: 'Jane Smith', description: 'Regular user' },
        { id: 3, name: 'Bob Johnson', description: 'Guest user' }
      ],
      'Products': [
        { id: 1, name: 'Laptop', description: 'High-performance laptop' },
        { id: 2, name: 'Smartphone', description: 'Latest model smartphone' },
        { id: 3, name: 'Tablet', description: 'Lightweight tablet' }
      ],
      'Orders': [
        { id: 1, name: 'Order #12345', description: 'Placed on 2023-06-01' },
        { id: 2, name: 'Order #12346', description: 'Placed on 2023-06-02' },
        { id: 3, name: 'Order #12347', description: 'Placed on 2023-06-03' }
      ],
      'Customers': [
        { id: 1, name: 'ABC Corp', description: 'Corporate customer' },
        { id: 2, name: 'XYZ Ltd', description: 'Small business customer' },
        { id: 3, name: 'John Smith', description: 'Individual customer' }
      ],
      'Inventory': [
        { id: 1, name: 'Laptop Stock', description: '50 units available' },
        { id: 2, name: 'Smartphone Stock', description: '100 units available' },
        { id: 3, name: 'Tablet Stock', description: '30 units available' }
      ]
    };

    return dummyData[tableName] || [];
  }
}

