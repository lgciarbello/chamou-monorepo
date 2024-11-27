import {Injectable} from "@angular/core";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {getDownloadURL} from "@angular/fire/storage";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private readonly storage: AngularFireStorage) {}

  async uploadFile(input: Blob | File, path: string): Promise<string> {
    // input.
    const uploadTask = await this.storage.upload(path, input);
    return getDownloadURL(uploadTask.ref);
  }

  async retrieveFileURL(path: string): Promise<string> {
    const ref = this.storage.ref(path);
    return lastValueFrom(ref.getDownloadURL());
  }
}
