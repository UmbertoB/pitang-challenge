import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v1';

@Injectable()
export class DataPersistenceService<T> {

    protected key: string;

    constructor() { }

    public create(data: T): void {
        const $key = localStorage.getItem(this.key);
        const $$key = $key ? [...JSON.parse($key), { ...data, id: uuid() }] : [{ ...data, id: uuid() }];
        localStorage.setItem(this.key, JSON.stringify($$key));
    }

    public setArray(data: T[]): void {
      localStorage.setItem(this.key, JSON.stringify(data));
    }

    public read(): T[] {
        return JSON.parse(localStorage.getItem(this.key));
    }

}
