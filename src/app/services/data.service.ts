import { Learning } from 'src/app/models/Learning';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first } from 'rxjs';
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
        this.getUsers().pipe(first()).subscribe((r: User[]) => {
            const index = r[r.length-1].id;
            const newId = parseInt(index) + 1;
            const newItem = this.db.object(`/users/${index}`);
            newItem.set({...data, id: newId.toString()});
        });
    }

    createLearning(data: any) {
        this.getLearnings().pipe(first()).subscribe((r: Learning[]) => {
            const index = r[r.length-1].id;
            const newId = parseInt(index) + 1;
            const newItem = this.db.object(`/learnings/${index}`);
            newItem.set({...data, id: newId.toString()});
        });
    }

    deleteUser(data: any): void {
        const itemsRef = this.db.list('users');
        const key = parseInt(data.id) - 1;
        itemsRef.remove(key.toString());
    }

    deleteLearning(data: any): void {
        const itemsRef = this.db.list('learnings');
        const key = data.id - 1;
        itemsRef.remove(key.toString());
        this.removeLearningRef(data.id);
    }

    removeLearningRef(id: number) {
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

    assignToUser(id: string, data: any){
        const itemsRef = this.db.list('users');
        const key = parseInt(data.id) - 1;
        if (!data.learnings) {
            data.learnings = [];
        } 
        data.learnings.push(id);
        itemsRef.set(key.toString(), data);
    }
    
}
