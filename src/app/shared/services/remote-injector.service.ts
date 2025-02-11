import {Inject, Injectable, Injector, PLATFORM_ID, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {InjectRemoteOptions} from '../types/inject-remote-options';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class RemoteInjectorService {

    constructor(
        @Inject(PLATFORM_ID) private readonly platformId: Object,
        private injector: Injector) {
    }

    async injectSsr(container: ViewContainerRef, options: InjectRemoteOptions) {
        if (isPlatformBrowser(this.platformId)) return;


    }

    async injectSpa(container: ViewContainerRef, options: InjectRemoteOptions) {
        if (isPlatformServer(this.platformId)) return;

        const remoteModule = await loadRemoteModule({
            remoteName: options.remoteName,
            exposedModule: options.exposedModule,
        });

        container.clear();

        return container.createComponent(
            options.injectComponent(remoteModule),
            {injector: this.injector}
        );
    }
}
