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
        result = result.filter((client: T) => {
          return client.id === id;
        });
      }
    } catch (error) {
      console.log(error);
    }

    return result[0];
  }

  public update(key: string, data: T): void {
    const clients = this.read(key);
    let index: number;

    try {
      index = clients.findIndex((client) => client.id === data.id);
      clients[index] = data;
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem(key, JSON.stringify(clients));
  }

  public delete(key: string, data: T): void {
    const clients = this.read(key);
    let clientsExceptOne = clients;

    try {
      clientsExceptOne = clients.filter((client) => client.id !== data.id);
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem(key, JSON.stringify(clientsExceptOne));
  }

}
