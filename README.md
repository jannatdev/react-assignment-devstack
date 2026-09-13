
## Project Name
 React-Assignment-A-5 Dev Stack Builder Website

## Description
Devstack is an interactive website built with React. Here users can browse popular technologies across different catagories such as Fronted, Backend, Styling  Database, Language, DevOps and add their preferred technologies to a personalized stack. It features reusable components, dynamic state management, technology filtering, interactive section, responsive design and a clean modern UI.

## Using Technologies:
1.React.js  
2.Tailwind CSS  
3.TypeScript  
4.JavaScript (ES6+)  
5.React-Toastify  
6.JSON  
7.Vite   


## 3 features of this projects:
1. Interactive Technology Cards - Explore technologies with descriptions, catagories, experience levels and ratings.
2. Reusable React Components - This website is built using reusable and maintainable components for better code generation.
3. Dynamic Stack Panel - View selected technologies in one place


# Answer of the mentioned questions-

## What is JSX, and why is it used in React?
Ans: JSX (JavaScript XML) is a syntax extension for JavaScript that allows HTML code inside JavaScript.
JSX makes React code easier to read, write and understand in which UI is described in HTML structure.

For Example,


           "function addFunctuion(){
           return <h2>Hello, World</h2>
             }"

			 
  Here, "<h2>Hello, World</h2> is JSX."
In short, JSX is used in React to make it easier and more intuitive to create and manage user interface.

## What is the difference between Props and State?
Ans: The differences are-
## Props:
1. Props are used for data passing from a parent component to a child component.
2. Props are read only.
3. Props are controlled by the parents component.
4. Props are also used to pass data between components.

## State:
1. State is used to manage data inside a component.
2. State can be changed or updated.
3. State is controlled by the component itself.
4. State is used to manage changing data or UI behaviour

In Simple Way- Props is data coming into a component and State is data managing inside a component.

## What does the useState hook do, and where did you use it in this project?
Ans: The useState hook is a React hook used to create and manage state inside a functional component. It allows a component to store data and update UI when that data changes.
In this project I have to use useState hook in the components. 

For example,
     const [count,setCount] =useState(0);

		Here, count- the current state value
		   setCount- function used to update the state
			      0  - initial value



## What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: The useEffect hook is used in React to perform a task after the component renders.
 
 useEffect perform the tasks....
 1. Load data from an API or JSON file
 2. Fetch information from a server
 3. Update the document file title
 4. Run some code when a component loads or changes

In this project useEffect is used to fetch Technologies' data from the JSON file when the component loaded, then stored the data in state, displayed it on the page.

## Why does every item in a .map() list need a unique key prop?
Ans: We use .map() to create a list of elements in React and each item needs a unique key. This key helps React identifies each item in the list and allows React to know which item is added , removed or changed without re-rendering the entire list. 
Without a unique key React may show a warning and may have difficulty efficiently updating the list.

## What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering means showing different content on the screen depending on a condition. if the condition is true, show one thing, if it is false show something else.
In this project I have to use it in several places. For example, in case of the empty stack message I use it-

{stucktechnologies.length===0? "Your Stuck is Empty":"Remove All"};

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: React is a uni-directional function. Here data usually passes from parent to child component through Props. But a child component cannot directly pass data to parent's state. Instead, the parent passed a function to the child and the child calls the function .
 








