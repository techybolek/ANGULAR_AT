import { TestBed } from "@angular/core/testing";
import { UserInterface } from "../types/user.interface";
import { UsersBService } from "./usersb.service";

//generate tests for UsersBService
describe('UsersBService', () => {
  let service: UsersBService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [UsersBService]});
    service = TestBed.inject(UsersBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    const user: UserInterface = { id: 1, name: 'John' };
    service.addUser(user);
    service.getUsers().subscribe((users) => {
      expect(users).toEqual([user]);
    });
    expect(service.currentUsers).toEqual([user]);
  });

  it('should remove a user', () => {
    const user: UserInterface = { id: 1, name: 'John' };
    service.addUser(user);
    service.removeUser(user);
    service.getUsers().subscribe((users) => {
      expect(users).toEqual([]);
    });
  });
});