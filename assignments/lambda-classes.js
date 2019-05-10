// CODE here for your Lambda Classes
class Person {
    constructor(pers) {
        this.name = pers.name;
        this.age = pers.age;
        this.location = pers.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person  {
    constructor(inst) {
        super(inst);
        this.specialty = inst.specialty;
        this.favLanguage = inst.favLanguage;
        this.catchphrase = inst.catchphrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    giveGrade(student) {
        return (student.grade - Math.floor(Math.random() * student.grade));
    }
}

/*let grading = function giveGrade() {
    return (100 - Math.floor(Math.random() * 101));
}
console.log(grading);
return giveGrade(),*/



class Student extends Person {
    constructor (stud) {
        super(stud);
        this.previousBackground = stud.previousBackground;
        this.className = stud.className;
        this.faveSubjects = stud.faveSubjects;
        this.grade = stud.grade;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor (pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel - It's standup time!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const Laura = new Student ({
    name: 'Laura',
    age: 783,
    location: 'San Francisco',
    previousBackground: 'life',
    className: 'web20',
    faveSubjects: ['coding', 'gardening', 'cats'],
    grade: 100
})

const Natalie = new Student ({
    name: 'Natalie',
    age: 292,
    location: 'Antarctica',
    previousBackground: 'Work',
    className: 'web40',
    faveSubjects: ['art', 'music', 'geography'],
    grade: 53
})

const Haley = new ProjectManager ({
    name: 'Haley',
    age: 49,
    location: 'Poland',
    gradClassName: 'Advanced PMing',
    favInstructor: 'Dan Levy',
    specialty: 'Snow Coding',
    favLanguage: 'CSS',
    catchphrase: 'Skol'
})

const Lara = new Instructor ({
    name: 'Lara',
    age: 157,
    location: 'Mexico',
    specialty: 'Mexican Cooking',
    favLanguage: 'Spanish',
    catchphrase: 'No hablo Espanol'
})
console.log(ProjectManager);
console.log(Student);
console.log(Instructor);
console.log(Laura);
console.log(Laura.location);
console.log(Haley.gradClassName);
console.log(Lara.favLanguage);
console.log(Haley.catchphrase);
console.log(Haley.speak());
console.log(Natalie.PRAssignment('art'));
console.log(Lara.demo('coding'));
console.log(Lara.grade(Laura, 'math'));
console.log(Haley.standup('web20_Haley'));
console.log(Haley.debugsCode(Natalie, 'javascript'))

console.log(Lara.giveGrade(Natalie));
console.log(Lara.giveGrade(Natalie));
console.log(Lara.giveGrade(Laura));
console.log(Lara.giveGrade(Laura));
