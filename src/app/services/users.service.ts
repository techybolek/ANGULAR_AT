import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { UtilsService } from './utils.service';

@Injectable()
export class UsersService {
    utilsService = inject(UtilsService)
    users: UserInterface[] = [];

    addUser(user: UserInterface) : void {
        this.users.push(user);
    }

    removeUser(user: UserInterface) : void {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
    }

    getUsernames(): string[] {
        return this.utilsService.pluck(this.users, 'name');
    }
}