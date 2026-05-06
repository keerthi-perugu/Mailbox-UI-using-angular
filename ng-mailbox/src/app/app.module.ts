import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

import { EmailListComponent } from './features/mailbox/components/email-list/email-list.component';
import { EmailCardComponent } from './features/mailbox/components/email-card/email-card.component';
import { EmailPreviewComponent } from './features/mailbox/components/email-preview/email-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmailListComponent,
    EmailCardComponent,
    EmailPreviewComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
