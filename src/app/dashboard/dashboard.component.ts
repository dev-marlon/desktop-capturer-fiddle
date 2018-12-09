import { Component, OnInit } from '@angular/core';
import { DesktopCapturerService } from './services/desktop-capturer.service';
import { Observable } from 'rxjs';
import { ElectronService } from '../services/electron.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public mediaSources$: Observable<any[]>;

	constructor(private desktopCapturerService: DesktopCapturerService, private electron: ElectronService) {
	}

	ngOnInit() {
		this.mediaSources$ = this.desktopCapturerService.sources;
		this.desktopCapturerService.loadSources();
	}

	onMediaSourceSelect(mediaSource) {
		(<any> navigator.mediaDevices).getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'desktop',
					chromeMediaSourceId: mediaSource.id,
					minWidth: 1024,
					maxWidth: 1024,
					minHeight: 768,
					maxHeight: 768
				}
			}
		})
		.then((stream) => this.handleStream(stream))
		.catch((e) => this.handleError(e));
	}

	openStage() {
		const stage = new this.electron.remote.BrowserWindow({
			width: 1024,
			height: 768,
			resizable: false,
			webPreferences: {
				webSecurity: false
			}
		});

		stage.loadURL('https://www.google.de');
	}


	private handleStream(stream) {
		const video: HTMLVideoElement = document.querySelector('video');

		video.srcObject = stream;
		video.onloadedmetadata = () => video.play();
	}

	private handleError(e) {
		console.log(e);
	}
}
