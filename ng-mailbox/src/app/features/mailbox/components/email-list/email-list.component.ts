import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Email } from '../../../../core/models/email.model';
import { EmailService } from '../../../../core/services/email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit, OnChanges {
  @Input() folder = 'inbox';
  @Output() emailSelected = new EventEmitter<Email>();

  emails: Email[] = [];
  filteredEmails: Email[] = [];
  selectedEmail: Email | null = null;
  searchQuery = '';
  isLoading = false;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.selectedEmail$.subscribe(email => {
      this.selectedEmail = email;
    });
    this.loadEmails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['folder'] && !changes['folder'].firstChange) {
      this.searchQuery = '';
      this.loadEmails();
    }
  }

  loadEmails(): void {
    this.isLoading = true;
    this.emailService.getEmailsByFolder(this.folder).subscribe(emails => {
      this.emails = emails;
      this.filteredEmails = emails;
      this.isLoading = false;
      // Auto-select first email
      if (emails.length > 0) {
        this.selectEmail(emails[0]);
      } else {
        this.emailService.selectEmail(null as any);
      }
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    if (!query.trim()) {
      this.filteredEmails = this.emails;
      return;
    }
    const lower = query.toLowerCase();
    this.filteredEmails = this.emails.filter(e =>
      e.sender.toLowerCase().includes(lower) ||
      e.subject.toLowerCase().includes(lower) ||
      e.preview.toLowerCase().includes(lower)
    );
  }

  selectEmail(email: Email): void {
    this.emailService.selectEmail(email);
    this.emailSelected.emit(email);
  }

  toggleStar(email: Email): void {
    this.emailService.toggleStar(email);
  }

  trackById(_index: number, email: Email): string {
    return email.id;
  }

  get folderTitle(): string {
    const titles: Record<string, string> = {
      inbox: 'Inbox', sent: 'Sent', drafts: 'Drafts', trash: 'Trash', star : 'Starred'
    };
    return titles[this.folder] || this.folder;
  }

  get unreadCount(): number {
    return this.emails.filter(e => !e.isRead).length;
  }
}
