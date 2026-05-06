import { Component } from '@angular/core';

@Component({
  selector: 'app-mailbox-page',
  template: `
    <div class="mailbox-page">
      <app-email-list [folder]="activeFolder"></app-email-list>
      <app-email-preview></app-email-preview>
    </div>
  `,
  styles: [`
    .mailbox-page {
      display: flex;
      flex: 1;
      height: 100%;
      overflow: hidden;
    }
  `]
})
export class MailboxPageComponent {
  activeFolder = 'inbox';

  onFolderChange(folder: string): void {
    this.activeFolder = folder;
  }
}
