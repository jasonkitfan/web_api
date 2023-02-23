class Student {
  constructor(private name: string) {
    console.log(`"Students Name: ${this.name}"`)
  }
}

const s1 = new Student("pk");
// console.log(s1.name);  // private propeties
