import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RemoteInjectorService} from '../../shared/services/remote-injector.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    @ViewChild('container', {read: ViewContainerRef, static: true})
    container!: ViewContainerRef;
    htmlContent: SafeHtml | null = null;

    constructor(
        private readonly httpClient: HttpClient,
        private readonly sanitizer: DomSanitizer,
        private readonly ssrRemoteInjectorService: RemoteInjectorService
    ) {
    }

    async ngOnInit() {
        await this.ssrRemoteInjectorService.injectSpa(this.container, {
            remoteName: 'mini-market-product',
            exposedModule: './Search',
            injectComponent: m => m.SearchComponent
        })
        //
        // const url = 'http://localhost:4201/search';
        //
        // this.httpClient.get(url, { responseType: 'text' }).subscribe({
        //     next: (html: string) => {
        //         // Sanitiza o HTML para evitar problemas de segurança (XSS, etc.)
        //         this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
        //     },
        //     error: () => console.error('Erro ao carregar o conteúdo HTML!')
        // });

    }
}
