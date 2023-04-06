(function () {

    /*
    *   以abstract开头的类是抽象类，【将多个类提取出来的相同的内容，比如狗和猫的相同的点就是动物】
    *       抽象类和其他类区别不大，只是【不能用来创建对象】
    *       抽象类就是【专门用来被继承的类】【就是用来当父类的】
    *
    *       抽象类中可以添加抽象方法  【也可以有正常的方法】
    * */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        // 定义一个抽象方法
        // 抽象方法使用 abstract开头，【没有方法体]
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void;
    }

    class Dog extends Animal{

        sayHello() {
            console.log('汪汪汪汪！');
        }

    }

    class Cat extends Animal{
        sayHello() {
            console.log('喵喵喵喵！');
        }

    }

    const dog = new Dog('旺财');
    dog.sayHello();

})();