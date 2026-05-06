import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MailboxPageComponent } from './mailbox-page.component';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';

@NgModule({
  declarations: [
    MailboxPageComponent,
    EmailListComponent,
    EmailCardComponent,
    EmailPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MailboxModule {}