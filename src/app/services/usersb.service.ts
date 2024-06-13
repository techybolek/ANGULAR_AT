import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersBService {
    private user$ = new BehaviorSubject<UserInterface[]>([]);

    get currentUsers() : UserInterface[] {
        return this.user$.getValue();
    }

    public getUsers() {
        return this.user$.asObservable();
    }

    addUser(user: UserInterface) : void {
        this.user$.next([...this.user$.value, user]);
    }

    removeUser(user: UserInterface) : void {
        this.user$.next(this.user$.value.filter((u) => u.id !== user.id));
    }

}