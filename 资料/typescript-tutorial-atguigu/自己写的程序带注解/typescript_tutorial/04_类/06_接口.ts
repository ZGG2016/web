(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

    /*
    *   1. 接口可以当成类型声明去使用 【但是接口可以重复声明，，如下两个myInterface，而 `type myType` 不可以】
    * */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string;
    }

    // const obj: myInterface = {
    //     name: 'sss',
    //     age: 111,
    //     gender: '男'
    // };

    // 2. 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法   【可以理解成其实现类要遵循的规范】
    /*
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的【属性都不能有实际的值】
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的【方法都是抽象方法】
    *
    * */
    interface myInter{
        name: string;

        sayHello():void;
    }

    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */
    class MyClass implements myInter{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(){
            console.log('大家好~~');
        }

    }

})();