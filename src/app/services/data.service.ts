import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private db: AngularFireDatabase) {
    }

    getUsers(): any {
        return this.db.list('users').valueChanges();
    }

    getLearnings(): any {
        return this.db.list('learnings').valueChanges();
    }

    deleteUser(data: any): void {
        const itemsRef = this.db.list('users');
        const key = data.id - 1;
        itemsRef.remove(key.toString());
    }

    deleteLearning(data: any): void {
        const itemsRef = this.db.list('learnings');
        const key = data.id - 1;
        itemsRef.remove(key.toString());
    }
    
}
