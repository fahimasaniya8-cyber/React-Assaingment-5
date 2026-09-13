// DevStack Project -

// Q1: What is the name of your project? "My project name is DevStack."

// Q2: Give a little description of your project. "DevStack is a web application
where users can explore different programming languages, frameworks and tools.
Technologies like React, JavaScript, TypeScript, and Tailwind CSS are shown as
cards. Users can build their own development stack by selecting technologies."

// Q3: What technologies did you use in this project? "I used React with JSX,
JavaScript ES6, TypeScript, Tailwind CSS, and Normal CSS for styling. I also
used a JSON file to store and load all the technology data."

// Q4: Mention 3 key features of your project. "1. Card-based UI: All
technologies are displayed as cards with name, category and rating. 2. Add to
Stack: When a user clicks 'Add to Stack', the technology is added to the 'Your
Stack' section. 3. Stack Management: Users can remove individual items or clear
the entire stack to start over."

// 1. What is JSX? "JSX is like HTML inside JavaScript. We use it in React
because it's easy to read and write UI."

// 2. Difference between Props and State? "Props are data sent from Parent to
Child. We cannot change it. State is data inside a component. We can change it
and the UI updates."

// 3. What does useState do? Where did you use it? "useState is used to store
data in a component. In this project I used it to store selectedStack and search
input."

// 4. What does useEffect do? Why for JSON data? "useEffect runs after the
component loads. I used it to load data from technologies.json one time."

// 5. Why do we need a unique key in .map()? "We give a unique key so React
knows which item changed, added or deleted. Without key the list becomes slow."

// 6. What is conditional rendering? Example? "Conditional rendering means
showing UI based on a condition. Example: If selectedStack is empty, I show
'Your stack is empty' message."

// 7. How to send data Parent to Child and Child to Parent? "Parent to Child:
using props. Child to Parent: Parent sends a function as props, Child calls that
function."

// Q1: Where can we deploy the site? "We can deploy the site on any hosting
platform. I can use Netlify, Vercel, or Cloudflare Pages. There is no fixed
platform."

// Q2: Do we have to use TypeScript? "No, it's not mandatory. We can build the
project with TypeScript or JavaScript. I used TypeScript, but it also works
perfectly with plain JavaScript."

// Q3: Can we change the title, logo, and colors? "Yes, we can. The title, logo,
and color scheme are fully customizable. We just need to keep them relevant to
the project."

// Q4: Where do we get the technology logos/icons? "We can use image URLs from
Google. A good source is https://techicons.dev/. It provides clean and free tech
logos. We just copy the icon URL and add it to our JSON data."
