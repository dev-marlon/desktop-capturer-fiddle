import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-media-sources-list',
	templateUrl: './media-sources-list.component.html',
	styleUrls: ['./media-sources-list.component.scss']
})
export class MediaSourcesListComponent {
	@Input() mediaSources;

	@Output() selectEvent = new EventEmitter<{}>();

	select(mediaSource) {
		this.selectEvent.emit(mediaSource);
	}
}
