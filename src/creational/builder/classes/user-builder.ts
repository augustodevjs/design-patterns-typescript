import { User } from "../interfaces/user-builder-protocol";

export class UserBuilder {
  private readonly _user: User;

  constructor() {
    this._user = {
      name: "",
      age: 0
    };
  }

  name(name: string): UserBuilder {
    this._user.name = name;
    return this;
  }

  age(age: number): UserBuilder {
    this._user.age = age;
    return this;
  }

  build(): User {
    return this._user;
  }
}