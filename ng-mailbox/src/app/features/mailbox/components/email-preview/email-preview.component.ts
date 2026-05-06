import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Email } from '../../../../core/models/email.model';
import { EmailService } from '../../../../core/services/email.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent implements OnInit {
  @Output() deleted = new EventEmitter<Email>();

  email: Email | null = null;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.selectedEmail$.subscribe(email => {
      this.email = email;
    });
  }

  getInitials(name: string): string {
    return name.split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  formatFullDate(timestamp: string): string {
    return new Date(timestamp).toLocaleString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatTime(timestamp: string): string {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  toggleStar(): void {
    if (this.email) this.emailService.toggleStar(this.email);
  }

  deleteEmail(): void {
    if (this.email) {
      this.emailService.deleteEmail(this.email);
    }
  }

  
}