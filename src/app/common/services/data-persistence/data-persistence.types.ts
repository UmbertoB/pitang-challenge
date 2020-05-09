enum DataPersistenceKeys {
    RECENT_SEARCHES = 'RECENT_SEARCHES',
    GITHUB_USER_DATA = 'GITHUB_USER_DATA',
}

interface RecentSearchesStorage {
    searchTerm: string;
    timestamp: Date;
}
