# reactjs

Session 3 Notes
----------------
Child Component
1) Creating child component
2) Parent component can pass props to the child component
3) The child component has a special property called as children
4) Functional component using functions instead of class
5) Functional components are stateless and can receive props
6) The child component can receive the event handler of the parent as props
7) The child component can call the received event handler to change the state of the parent component

Life Cycle Method of Component
1) Creation Life Cycle
	1) constructor
	2) getInitialState
	3) componentWillMount
	4) render
		a) Child component lifecycle will begin
	5) componentDidMount
	
2) Update Life cycle - Internal (state change)
	1) shouldComponentUpdate
	2) componentWillUpdate (No side effects)
	3) render (No side effects)
		a) Child component lifecycle will begin
	4) componentDidUpdate (Side effects -changing state will trigger render)
	
3) Update Life cycle - External (Props change)
	1) componentWillReceiveProps (Setting the state of the child component with the props received)
	2) shouldComponentUpdate (Returning false will prevent subsequent life cycle being called)
	3) componentWillUpdate (No side effects)
	4) render
		a) Child component lifecycle will begin
	5) componentDidUpdate (Side effects -changing state will trigger render)

Note-	Functional component does not have a life cycle methods

PureComponent
	extending pureComponent
		shouldComponentUpdate method is already been provided where is the setState changes the same value, the method return false
			this prevents subsequent life cycle being called
			
			//works
			state{
				state1:'sdsdsd'
				state2:'sdsddsfdsf'
			}
			
			//doesnot work as per your expectation
			state{
				state1: {dsd:dfddsf,dsfdsf:fdgfdg}
				state2: {dsdsd:ytrgg,dfdsfdsf:fgtrgrg}
			}
