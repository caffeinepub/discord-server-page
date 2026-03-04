import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ServerInfo {
    tagline: string;
    memberCount: bigint;
    inviteURL: string;
    description: string;
    serverName: string;
}
export interface FeatureHighlight {
    title: string;
    description: string;
}
export interface backendInterface {
    getFeatureHighlights(): Promise<Array<FeatureHighlight>>;
    getRules(): Promise<Array<string>>;
    getServerInfo(admin: Principal): Promise<ServerInfo>;
    isAdmin(): Promise<boolean>;
    updateFeatureHighlights(newFeatures: Array<FeatureHighlight>): Promise<void>;
    updateRules(newRules: Array<string>): Promise<void>;
    updateServerInfo(serverName: string, tagline: string, description: string, inviteURL: string, memberCount: bigint): Promise<void>;
}
