function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'John',
  lastName: 'Miranda',
  age: 34,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
};

Person.prototype = Object.create(personPrototype);
const person1 = new Person('João', 'Augusto', 20);
console.log(person1.fullName())