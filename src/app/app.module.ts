import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TabContainerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

