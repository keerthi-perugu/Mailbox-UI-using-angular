import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../../../../core/models/email.model';

@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.scss']
})
export class EmailCardComponent {
  @Input() email!: Email;
  @Input() isSelected = false;
  @Output() selected = new EventEmitter<Email>();
  @Output() starred = new EventEmitter<Email>();

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }

  onSelect(): void {
    this.selected.emit(this.email);
  }

  onStar(event: Event): void {
    event.stopPropagation();
    this.starred.emit(this.email);
  }
}
