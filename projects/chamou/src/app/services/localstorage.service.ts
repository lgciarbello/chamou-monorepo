import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key: string, value: any) {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): any {
    const item = this.storage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  removeItem(key: string): void {
    if (this.storage) {
      this.storage.removeItem(key);
    }
  }

  clear(): void {
    this.storage.clear();
  }


}
