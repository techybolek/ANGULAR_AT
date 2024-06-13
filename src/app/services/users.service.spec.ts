import { UsersService } from './users.service';
import { UserInterface } from '../types/user.interface';
import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UsersService', () => {
  let service: UsersService;
  let utilsService: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, UtilsService]
    });
    service = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    const user: UserInterface = { id: 1, name: 'Bolek' }
    service.addUser(user);
    expect(service.users.includes(user)).toBe(true);
  });

  it('should remove a user', () => {
    const user: UserInterface = { id: 1, name: 'Lolek' }
    service.addUser(user);
    service.removeUser(user);
    expect(service.users.includes(user)).toBe(false);
  });

  it('should return an array of usernames', () => {
    jest.spyOn(utilsService, 'pluck')
    const users: UserInterface[] = [
      { id: 1, name: 'Bolek' },
      { id: 2, name: 'Lolek' }
    ];
    service.users = users;
    expect(service.getUsernames()).toEqual(['Bolek', 'Lolek']);
    expect(utilsService.pluck).toHaveBeenCalledWith(service.users, 'name');
  });
});