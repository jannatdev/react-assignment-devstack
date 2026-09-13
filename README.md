## The Project Name
A-5 Dev Stack Builder Website 

## Description
Dev-Stack is a interactive clean and user-friendly website built with React that adapts to different screen sizes. Here users can browse popular technologies with descriptions, categories , experience levels and ratings and add their preferred technologies to a personalized stack.

## The Technologies that I use in this project:
1. React.js
2. Tailwind CSS
3. TypeScript
4. JavaScript (ES6+)
5. React-Toastify
6. JSON

## 3 features of this project:
1. Interactive Technology Cards- Explore technologies with descriptions, categories, experience levels and ratings.
2. Reusable React Components- This website is built using reusable and maintainable components for better code organization.
3. Dynamic Stack Panel- View selected technologies in one place.



 # The answers of the questions that are mentioned for assignment:

 ## 1.What is JSX, and why is it used in React?
 Ans: JSX (JavaScript XML) is a syntax extension for JavaScript that allows HTML code inside JavaScript.
 It is used in React to make React Code easier to create and manage user interfaces in which UI is described in HTML structure.

 ## 2.What is the difference between props and state?
 Ans: The differences are....
 ## Props:
 1. Props are used to pass data from parent component to child component.
 2. Props are read only.
 3. Props are controlled by the parent component.
 4. It is also used to pass data between components.

## State:
1. State is used to manage data inside a component.
2. State can be changed or updated.
3. State is controlled by the component itself.
4. It is used to manage changing data or UI behaviour.

In simple way, Props mean coming data into component and State means managing data inside component.

## 3.What does the useState hook do, and where did you use it in this project?
Ans: The useState hook is a React hook used to create and manage state inside a functional component. It allows a component to store data and update UI when that data changes.
I use this hook almost every component. For example,

  const [count,setCount] = useState(0)

  Here, count= the current state value.
     setCount= function to update the state
           0 = initial value


  ## 4.What does the useEffect hook do, and why did you need it to load the JSON data?
  Ans: The useEffect hook is used in React to perform a task after the component renders.
  
  The tasks of useEffect hook...
  1. Load data from an API or JSON file.
  2. Fetch information from a server.
  3. Update the document file title.
  4. Run some code when a component loads or changes.

In this project, this is used to fetch data from JSON file when the component loaded, then stored the data in state displayed on the page.

## 5.Why does every item in a .map() list need a unique key prop?
Ans: .map() is used to create a list of elements in React and each element needs a unique key. This key helps React to identify each element in the list that allows React to know which element was added or removed or changed without rendering the entire list.
 Without a unique key React may show a warning and may have difficulty  efficiently updating the list.

## 6.What is conditional rendering? Show one place you used it (example: the empty stack message)?
Ans: Conditional rendering means showing different content on the screen depending on a condition. If the condition is true show one thing, if it is false show something else.
In this project I have to use this conditional rendering in several places. For example,

{stuckTechnologies.length===0?"Stuck is Empty":"Remove All"};
This is used in Stack Pannel.

## 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: React is a uni-directional function. Here data usually passes from parent component to child component though Props. But a child component directly cannot change the parents state. Instead, the parent component passed a function to the child component and the child can call the function. 







