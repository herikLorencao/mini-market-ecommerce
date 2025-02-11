import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NotFoundComponent} from '../not-found/not-found.component';
import {isPlatformBrowser} from '@angular/common';

@Component({
    selector: 'app-ssr-wrapper',
    standalone: true,
    imports: [NotFoundComponent],
    templateUrl: './ssr-wrapper.component.html',
    styleUrls: ['./ssr-wrapper.component.scss']
})
export class SsrWrapperComponent implements OnInit {
    invalidLoading = false;

    constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId))
            setTimeout(() => (this.invalidLoading = true), 3000);
    }
}
