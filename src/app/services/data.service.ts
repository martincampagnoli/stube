import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../models/User';

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

    createUser(data: any) {
        const itemsRef = this.db.list('users');
        itemsRef.push(data);
    }

    createLearning(data: any) {
        const itemsRef = this.db.list('learnings');
        itemsRef.push(data);
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
        this.removeLearningRef(data.id);
    }

    removeLearningRef(id: number) {
        const userRef = this.db.list('users');
        this.getUsers().subscribe((r: User[]) => {
            r.forEach(elem => {
                if (elem.learnings?.includes(id)) {
                    elem.learnings.splice(elem.learnings.indexOf(id), 1); 
                    this.updateUser(elem);
                }
            });
        });
    }

    updateLearning(data: any): void {
        const itemsRef = this.db.list('learnings');
        const key = data.id - 1;
        itemsRef.set(key.toString(), data);
    }

    updateUser(data: any){
        const itemsRef = this.db.list('users');
        const key = data.id - 1;
        itemsRef.set(key.toString(), data);
    }

    assignToUser(id: number, data: any){
        const itemsRef = this.db.list('users');
        const key = data.id - 1;
        if (!data.learnings) {
            data.learnings = [];
            data.learnings.push(id);
        } 
        else {
            data.learnings.push(id);
        }
        itemsRef.set(key.toString(), data);
    }
    
}
