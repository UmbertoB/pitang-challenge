export default interface RecentSearchStorage {
    id?: string;
    searchTerm: string;
    timestamp: Date;
    avatarUrl?: string;
}
