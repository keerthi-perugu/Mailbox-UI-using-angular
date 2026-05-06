import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailService } from '../../core/services/email.service';
import { ThemeService } from '../../core/services/theme.service';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  folder: 'inbox' | 'sent' | 'drafts' | 'trash';
  count?: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() folderChange = new EventEmitter<string>();

  activeFolder = 'inbox';
  isDark = false;

  navItems: NavItem[] = [
    { id: 'inbox', label: 'Inbox', icon: 'inbox', folder: 'inbox' },
    { id: 'sent', label: 'Sent', icon: 'send', folder: 'sent' },
    { id: 'drafts', label: 'Drafts', icon: 'draft', folder: 'drafts' },
    { id: 'trash', label: 'Trash', icon: 'trash', folder: 'trash' },
    { id: 'star' , label: 'Starred', icon: 'star' ,folder: 'trash'}
  ];

  constructor(
    private emailService: EmailService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.emailService.getFolderCounts().subscribe(counts => {
      this.navItems = this.navItems.map(item => ({
        ...item,
        count: counts[item.id] || undefined
      }));
    });

    this.themeService.isDark$.subscribe(isDark => this.isDark = isDark);
  }

  selectFolder(folder: string): void {
    this.activeFolder = folder;
    this.folderChange.emit(folder);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
