class Person {
  // class body

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`hello, my name is: ${this.name} and im ${this.age} years old`);
  }
}

//  mateseting the tools of the job is not maatter at all
// tools are ever evolving. don't try to master any tool, but master the fundamentals

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
