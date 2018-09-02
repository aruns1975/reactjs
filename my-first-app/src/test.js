
class MyClass{
	myVar = 'Test';
	myMethod(){
		this.myVar = 'New Test';
		console.log('I am inside the method');
	}
}

let obj1=new MyClass();


obj1.myMethod();

let myMethod= obj1.myMethod();
myMethod();