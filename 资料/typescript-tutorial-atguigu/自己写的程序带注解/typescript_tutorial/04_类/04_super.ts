(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('动物在叫~');
        }
    }

    class Dog extends Animal{

        age: number;

        constructor(name: string, age: number) {
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            // 【使用父类的构造函数初始化name，使用自己的构造函数初始化age】
            super(name); // 调用父类的构造函数
            this.age = age;
        }

        sayHello() {
            // 在类的方法中 super就表示当前类的父类  【子类中引用父类方法】
            //super.sayHello();

            console.log('汪汪汪汪！');
        }

    }

    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();