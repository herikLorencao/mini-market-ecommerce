import {initNodeFederation} from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

    await initNodeFederation({
        remotesOrManifestUrl: {
            'mini-market-product': 'http://localhost:4201/remoteEntry.json',
        },
        relBundlePath: '../browser/',
    });

    await import('./bootstrap-server');

})();
