import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v1';
import { DataPersistenceService } from 'src/app/common/services/data-persistence/data-persistence.service';


export interface RecentSearchStorage {
    id?: string;
    searchTerm: string;
    timestamp: Date;
    avatarUrl?: string;
}


@Injectable()
export class RecentSearchPersistenceService extends DataPersistenceService<RecentSearchStorage> {

    constructor() {
        super();
        this.key = 'RECENT_SEARCHES';
    }

    public getBySearchTerm(searchTerm: string): RecentSearchStorage {
        let result = JSON.parse(localStorage.getItem(this.key));

        try {
            result = result.filter((item: RecentSearchStorage) => {
                return item.searchTerm === searchTerm;
            });
        } catch (error) {
            console.log(error);
        }

        return result[0];
    }

    public updateTimestamp(data: RecentSearchStorage): void {
        const items = this.read();
        let index;

        try {
            index = items.findIndex((item) => item.id === data.id);
            items[index] = { ...data, timestamp: new Date() };
        } catch (error) {
            console.log(error);
        }

        localStorage.setItem(this.key, JSON.stringify(items));
    }

    public recentSearchExists(searchTerm: string): RecentSearchStorage {
        const recentSearches = this.read();
        if (recentSearches) {
            return recentSearches.find(r => r.searchTerm.toLowerCase() === searchTerm.toLowerCase());
        }
    }

    public setOriginalRecentSearchData(searchTerm: string, avatarUrl: string, userName: string): void {
        const items = this.read();
        const data = this.getBySearchTerm(searchTerm);
        let index;

        try {
            index = items.findIndex((item) => item.id === data.id);
            items[index] = { ...data, avatarUrl, searchTerm: userName };
        } catch (error) {
            console.log(error);
        }

        localStorage.setItem(this.key, JSON.stringify(items));
    }

}
