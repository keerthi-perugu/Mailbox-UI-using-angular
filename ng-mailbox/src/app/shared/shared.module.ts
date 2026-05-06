import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

@NgModule({
  declarations: [RelativeTimePipe],
  imports: [CommonModule],
  exports: [RelativeTimePipe]
})
export class SharedModule {}
