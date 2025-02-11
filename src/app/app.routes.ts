import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {SsrWrapperComponent} from './shared/components/ssr-wrapper/ssr-wrapper.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 's',
        loadComponent: () => loadRemoteModule({
            remoteName: 'mini-market-product',
            exposedModule: './Search',
            fallback: SsrWrapperComponent
        }).then(m => m.SearchComponent)
    }
];
