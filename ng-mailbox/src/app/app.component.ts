import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeFolder = 'inbox';
  mobileListVisible = false;

  onFolderChange(folder: string): void {
    this.activeFolder = folder;
    this.mobileListVisible = true;
  }

  onEmailSelected(): void {
    
  }
}
