import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DesktopCapturerService } from './services/desktop-capturer.service';
import { MediaSourcesListComponent } from './components/media-sources-list/media-sources-list.component';

@NgModule({
  declarations: [DashboardComponent, MediaSourcesListComponent],
  imports: [
    CommonModule
  ],
  providers: [DesktopCapturerService]
})
export class DashboardModule { }
