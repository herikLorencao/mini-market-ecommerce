export type InjectRemoteOptions = {
    remoteName: string;
    exposedModule: string;
    injectComponent: (module: any) => any
}
