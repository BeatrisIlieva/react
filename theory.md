## Components: Basic Idea

A **Component** is an independent and reusable piece of code. In React a component contains encapsulated business logic, data and presentation.

A **Component** is a function that returns JSX.

A **Component** always starts with a capital letter -> Pascal Case.

In a component all tags must be closed.

React **element** is an object -> lighter version of a DOM element.

A **Component** is a function that returns a React element.

A **fragment** is a React element that can surround other React elements but it does not appear in the DOM.

A **Component** can return only one React element.

What does the component tree creates?

-   A Component returns an Element. A tree of functional components returns a tree of react elements -> React VDOM.

React optimizes rendering by using three key elements:

1. Component tree -> a tree of functional components
2. Virtual DOM -> a lightweight copy of the actual DOM
3. DOM tree that is created and updated based on the Virtual DOM

VDOM lives in memory. It contains of objects. VDOM is a lightweight copy of the actual DOM. Since it is light, the operations performed on it are fastet compared to the actual DOM that is heavy.

React firstly updates the VDOM instead of the actual DOM. Algorithms calculate what are the minimum actions needed so the actual DOM can be updated based on the VDOM. Thus the modifications on the actual DOM get minimized. Modifications on the actual DOM are slow because the objects it consists of are large (they contain much more properties compared to the VDOM). This is why the minimizing of operations applied on the actual DOM makes React fast.

STEPS:

1. Initial VDOM is created based on the component tree
2. When a change is made algorithms calculate what are the minimum actions needed to update the tree
3. Updated VDOM is created
4. ReactDOM library knows how to translate a VDOM element into an actual DOM element. ReactDOM library knows which element in the VDOM corresponds to which element in the actual DOM. It tracks which elements exactly are changed
5. The actual DOM gets modified only where needed based on the VDOM

PROPS:

Props are like HTML attributes. React translates them to objects

```
title="Some title" => {title: 'Some title'}
```

By default functions are stateless. **State** allows React function components to keep state. **State** is an object.

**useState** is a hook that allows React functional components to have state.

useState returns an array in which the first element is the current value and the second element is a function that can change the value.

**useState** does two things:

1. it remembers the state
2. gives a sign to react to rerender the component if the state changes

When working with reference data types `useState` checks if the reference has changed. That is why if we need `useState` to change the state we need to change the reference of the object.

**Keys**

Keys help React to effectively detect what change has happened.

-   keys must be unique
-   keys must be unchangeable so they can keep the identity of the elements between renders


A component has 3 lifecycle phases:
1. Mounting
3. Updating
4. Unmounting

**useEffect** hook accepts a dependency array in which is described for what changes to listen so as to execute.

If useEffect does not have a dependency array it will execute on every render. 

Empty dependency array means that the effect will execute on `mount`.

When useEffect has a non empty dependency array it will execute every time in which some of its dependency updates. If useEffect has any variable inside its definition it must eb present in the dependency array. 

On unmount `useEffect` needs a clean up function. 
