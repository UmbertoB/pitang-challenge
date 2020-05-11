export enum DataPersistenceKeys {
    RECENT_SEARCHES = 'RECENT_SEARCHES',
    GITHUB_USER_DATA = 'GITHUB_USER_DATA',
}

export interface RecentSearchStorage {
    id?: string;
    searchTerm: string;
    timestamp: Date;
    avatarUrl?: string;
}
