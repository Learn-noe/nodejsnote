# 模块  
## 一个文件就是一个模块
# nodejs事件
## var event=require('event') node事件库
### var myEmitter=new event.EventEmitter();
    var util=require('util'); node工具库  代表继承  和extends用法相同  可以绑定事件
    var persion=function (name){
        thisnname=name;
    }
    util.inherits(Person,event.EventEmitter);
    var xiaoming=new Person('xioaming');
    var xiaohua=new Person(xiaohua);
    var xiaoli=new Person(xiaoli);
    var persion=[xiaohua,xiaoli,xiaoli]
    person.forEach(function(person){
        person.on('speak',function(message){
            console.log(person.name+"said:"+message);
        })
    })
    xiaoming.emit('speak','hi');
    xiaohua.emit('speak','i want a curry')
    myEmitter.on('someEvent',function(message){
        console.log(message);
    })
    myEmitter.emit('someEvent','the event was emitted')
    