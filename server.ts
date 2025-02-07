import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    relBundlePath: '../browser/',
  });

  await import('./bootstrap-server');

})();
