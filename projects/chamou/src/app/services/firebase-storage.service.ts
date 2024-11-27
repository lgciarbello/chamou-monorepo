import {Injectable} from "@angular/core";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private readonly storage: Storage) {}

  async uploadFile(input: Blob | File, path: string): Promise<string> {
    // input.
    const storageRef = ref(this.storage, path)
    const uploadTask = await uploadBytes(storageRef, input);
    return getDownloadURL(uploadTask.ref);
  }

  async retrieveFileURL(path: string): Promise<string> {
    console.log(this.storage);

    const storageRef = ref(this.storage, path);
    return getDownloadURL(storageRef);
  }
}
