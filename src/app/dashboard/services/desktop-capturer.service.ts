import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from '../../services/electron.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DesktopCapturerService {
	private _sources: BehaviorSubject<any[]>;

	constructor(private electron: ElectronService, private zone: NgZone) {
		this._sources = <BehaviorSubject<any[]>>new BehaviorSubject([]);
	}

	get sources(): Observable<any[]> {
		return this._sources.asObservable();
	}

	public loadSources(): void {
		this.electron.desktopCapturer.getSources({
				types: ['window']
			},
			(error, result) => {
				// The callback runs outside an angular zone - we have to run it manually
				this.zone.run(() => {
					this._sources.next(result);
				});
			}
		);
	}
}
