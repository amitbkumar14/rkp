import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabContainerComponent } from './tab-container/tab-container.component';

interface Tab {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SidebarComponent,TabContainerComponent]
})
export class AppComponent {
  openTabs: Tab[] = [];
  activeTabName: string | null = null;

  openTable(tableName: string) {
    const existingTab = this.openTabs.find(tab => tab.name === tableName);
    if (!existingTab) {
      this.openTabs.forEach(tab => tab.active = false);
      this.openTabs.push({ id: this.openTabs.length + 1, name: tableName, active: true });
    } else {
      this.openTabs.forEach(tab => tab.active = tab.name === tableName);
    }
    this.activeTabName = tableName;
  }

  closeTab(tabId: number) {
    const index = this.openTabs.findIndex(tab => tab.id === tabId);
    if (this.openTabs[index].active && this.openTabs.length > 1) {
      const newActiveIndex = index === this.openTabs.length - 1 ? index - 1 : index + 1;
      this.openTabs[newActiveIndex].active = true;
      this.activeTabName = this.openTabs[newActiveIndex].name;
    }
    this.openTabs.splice(index, 1);
    if (this.openTabs.length === 0) {
      this.activeTabName = null;
    }
  }

  setActiveTab(tabId: number) {
    const activeTab = this.openTabs.find(tab => tab.id === tabId);
    if (activeTab) {
      this.openTabs.forEach(tab => tab.active = tab.id === tabId);
      this.activeTabName = activeTab.name;
    }
  }
}

