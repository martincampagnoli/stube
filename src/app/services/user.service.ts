import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private db: AngularFireDatabase) {
    }

    getUsers(): any {
        return this.db.list('users').valueChanges();
    }

    deleteUser(data: any): void {
      const itemsRef = this.db.list('users');
      const key = data.id - 1;
      itemsRef.remove(key.toString());
    }
}
