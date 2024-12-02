export default function UserConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return `Привет, меня зовут ${this.name}, мне ${this.age} лет`;
    };
}
