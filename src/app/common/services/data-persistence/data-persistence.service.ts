import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v1';

export interface GenericId {
  id?: string;
}

@Injectable()
export class DataPersistenceService<T extends GenericId> {

  constructor() { }

  public create(key: string, data: T): void {
    const $key = localStorage.getItem(key);
    const $$key = $key ? [...JSON.parse($key), { ...data, id: uuid() }] : [{ ...data, id: uuid() }];
    localStorage.setItem(key, JSON.stringify($$key));
  }

  public read(key: string): T[] {
    return JSON.parse(localStorage.getItem(key));
  }

  public get(key: string, id: string = null): T {
    let result = JSON.parse(localStorage.getItem(key));

    try {
      if (id) {
        result = result.filter((item: T) => {
          return item.id === id;
        });
      }
    } catch (error) {
      console.log(error);
    }

    return result[0];
  }

  public update(key: string, data: T, propertyToMatch?: string): void {
    const items = this.read(key);
    const itemFound = items.find(item => item[propertyToMatch] === data[propertyToMatch]);
    const existentId = itemFound.id;
    let index: number;

    try {
      index = items.findIndex((item) => item[propertyToMatch || 'id'] === data[propertyToMatch || 'id']);
      items[index] = {...data, id: existentId };
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem(key, JSON.stringify(items));
  }

  public itemExistsInStorage(key: string, propertyToMatch: string, value: string): boolean {
    const items = this.read(key);
    if (items) {
      return items.map(item => item[propertyToMatch]).includes(value);
    }
  }

  public delete(key: string, data: T): void {
    const items = this.read(key);
    let itemsExceptOne = items;

    try {
      itemsExceptOne = items.filter((item) => item.id !== data.id);
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem(key, JSON.stringify(itemsExceptOne));
  }

}
