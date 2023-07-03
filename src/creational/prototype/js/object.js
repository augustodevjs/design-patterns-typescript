const personPrototype = {
  firstName: 'John',
  lastName: 'Miranda',
  age: 34,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());