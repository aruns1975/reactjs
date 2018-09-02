# reactjs

Session 2 Notes

class MyClass{
	myVar = 'Test';
	myMethod =function(){
		this.myVar = 'New Test';
		console.log('I am inside the method');
	}
	
	MyAotherMethd = () =>{
		this.myVar  =' another var'
	}
}

let obj1=new MyClass();


obj1.myMethod();

let myMethod= obj1.myMethod();
let myMethod1= obj1.MyAotherMethd();

myMethod();

class MyClass2{
	myMthod(){
		let obj1=new MyClass();

		let myMethod= obj1.myMethod().bind(obj1);
		myMethod();
	}
}