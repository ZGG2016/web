class Dog{
    name: string;
    age: number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        console.log(this);
        // 在实例方法中，this就表示当前当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象  【执行 const dog1 = new Dog('小黑', 4); 就是里的dog1】
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }

    bark(){
        // alert('汪汪汪！');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}

const dog1 = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

// console.log(dog1);
// console.log(dog2);

dog2.bark();
