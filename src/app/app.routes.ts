import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {SsrWrapperComponent} from './shared/ssr-wrapper/ssr-wrapper.component';

export const routes: Routes = [
  {
    path: 's',
    loadComponent: () => loadRemoteModule({
      remoteName: 'mini-market-produto',
      exposedModule: './Search',
      fallback: SsrWrapperComponent
    }).then(m => m.SearchComponent)
  }
];
