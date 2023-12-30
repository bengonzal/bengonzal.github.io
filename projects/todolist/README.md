# Todolist README
I figured this would be a good place to include a readme for the todolist web application I'm trying to create.
In this readme I plan on typing some notes I have while working on the project such as things I might be struggling with, design choices, how I've overcome challenges, etc.

I think with working on the project, good documentation can enhance it because it allows others to see what my thought process was for certain features. Also, having this documentation lets me have an easier time creating the post that will eventually popup on my blog's homepage when I write it!

## Design Decisions
### How to group todolist items and checkboxes
As you can probably read when you check out the css for this project, and I'll mention in my project's post, I used a website - https://uiverse.io/ - for a fancy looking input box that the users will use as their way of marking down tasks/items in the todolist. Because of the styling of the input elements, the input element(s) have to be wrapped by an input-wrapper div which doesn't pose a design problem...at first. It is only by the addition of a checkbox, an element to indicate whether or not an item is done, that I came up with a dilema. How should I group the inputs and their associated checkboxes? 
#### Option 1:
Separate Divs for each input and checkbox
- Here I would have a separate input-wrapper div that contained only a single item + associated checkbox.
##### Pros: 
* Each task is contained within its own div, providing a clear separation.
* Easier to apply specific styles or manipulate individual tasks using CSS or JavaScript.
##### Cons: 
* May result in more HTML markup, which might be a concern if you have a large number of tasks.

#### Option 2: 
A single input-wrapper div that contained all input and checkbox elements
- Here I would have a single input-wrapper div that contained all input + associated checkboxes, probably separated by whitespace. 
##### Pros:
* Simpler HTML structure, potentially easier to manage.
* If tasks share common styling or behavior, applying changes is straightforward.
##### Cons: 
* Might be less semantically clear as each task is not individually wrapped.

I chose to go with option 1 because I think semantically, and personally, it will have better readability, and I want to incorporate some sort of JS in this project. As of right now, I am unsure how I will incorporate the JS, but I know that choosing this design will probably save me some headaches in the future.