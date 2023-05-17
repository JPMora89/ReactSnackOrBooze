# Conceptual Exercise

Answer the following questions below:

## What is the purpose of the React Router?
React Router makes it simple to manage the URL and state of your application. You specify all of the potential URL patterns in your app and which UI component should be displayed for each one using React Router. This Router decreases the amount of code an app requires to maintain its state and makes adding new features more accessible.

## What is a single page application?
A web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown. This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

## What are some differences between client side and server side routing?
In server side routing, HTML is rendered by the server upon each HTTP request from the client. With client side routing, all routing and HTML rendering in the application is
handled by the JS on the client side and requests to the server tend to only return JSON instead of HTML. 

## What are two ways of handling redirects with React Router? When would you use each?
You can use a 'Redirect' component or a 'useHistory' hook to handle redirecting in a react app. The redirect component re-routes the suer to a chosen route and can be used in the 'Route' components
or in the return statement of another component. It is useful when a user attempts to go to a route that is protected or does not exist. The history object that we get from using the useHistory hook can be used to send the user to this new route and add it to the browser hosty. Looks like this: "history.push('new-redirect-route')". This way is useful as the action inside of a callback function. 

## What are two different ways to handle page-not-found user experiences using React Router? 
The first way would be to add a NotFound component in a Switch wrap of the router and the other way would be to redirect the user to a 404page or something similar when the path requested is not found.
Since Switch is no longer in use as of ReactRouter V6, all I can think of is using the redirect option when page is not found.

## How do you grab URL parameters from within a component using React Router?
To grab parameters from within a component in React you can use the "useParams" hook that will grab the params passed into the url.  You can then deconstruct the params since they are coming in as an object.

## What is context in React? When would you use it?
Context in react gives us the ability to pass props down to any component by defining them in a singular component. Then you can wrap the parent component with '.Provider' property yyou get when using
the hook 'useContext'. This will now give you the ability to pass down props to individual components without having to pass down the prop to every single component in the chain therefore avoiding
prop drilling. This is useful when you have a prop that may be used by more than one component but not every single one there avoiding having to repeat code unnecessarily. 

## Describe some differences between class-based components and function components in React.
Class based components required a whole lot more code to gain the same utility as functional components. In class components you need to establish the state and props in the class constructor. Since these objects would be using many different props in order to keep track you needed to use "this" a whole bunch of times to keep track of which prop had what instance. You would then need to bind the instance method
in order to keep the proper context of things, making the code fairly complicated. Class based components had a variety of different methods to maintain different parts of the component life cycle
such as ComponentDidMount, ComponentDidUpdate, render... etc. This is handle in functional components using hooks such as useEffect and such. The amount of differs greatly in size as all that could be handled in one function. 

## What are some of the problems that hooks were designed to solve?
Hooks helps with many issues faced as react has evolved. It allows the ability to reuse code in different components without the need to repeat the code. Hooks allow us to manage the state of different components in a single line if needed. 