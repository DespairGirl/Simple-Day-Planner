# Simple-Day-Planner
>This Day Planner is a simple web application that allows user to input and save daily tasks. With the use of jQuery to dynamically update HTML and CSS, the user will be able to visualize their daily schedule in a more organized way, as the time blocks change colours based on what the current time is-- different colors for past, present, and future times.


## Live URL
[My Day Planner](https://despairgirl.github.io/Simple-Day-Planner/)

![Planner Overview](https://drive.google.com/file/d/1GwYiMQexLgT2ZKvTsu8PyMjya0DlaiSG/preview) 

## what's The Problem?
> Given a starter code, I had to create a web application that would do a few key things:
 
 1. when opened, displayed the current date and time.
 2. Present time blocks for a basic workday schedule of 9am-5pm.
 3. Colour code time blocks to indicate past, present and future time.
 4. Allow input into the time blocks when clicked.
 5. Save entries into time blocks and store them into local storage.
 6. Making sure entries don't clear when page refreshes. 

 ## My Solution:

 > First, I made divs for each time slot from 9am-5pm in the html file, with an id pertaining to their value in 24hour format. Then, in the javascript file, used jQuery library moment to get current time information. With this information, I was able to do comparisions to get the colour-coding functionality working. Other jQuery was used for everything else: input into time blocks, saving, and local storage.


 ## Tools Used

- [MOMENT.JS](https://momentjs.com/)
- [jQuery API](https://api.jquery.com/)
- [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API)
- [W3 Schools](https://www.w3schools.com/)
- VS Code
