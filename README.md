# third-party-APIs

## Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


## psudocode

Step One
Q: How will I generate the date above my calendar?
A: using the variable 'new date' 
Q: How are the timeblocks be created?
A: in HTML I will create div contianers with text boxes inside them

Step Two
Q: How will the planner know what time it is?
A: appending the date feature to the calendar contianer
Q: What makes the different time blocks change colors?
A: a for loop incorporating the time (if past gray, if present red, if future green)

Step Three
Q: What makes the text save?
A: a button added next to each timeblock linked to an addEventListener
Q: Where will the timeblock text be saved? 
A: the text will be saved into local storage
Q: how will the text remain saved on the page after it is refreshed?
A: using the sessionStorage.getItem function to save the text

1. display current date (Ayla)
2. present timeblocks in html via js 
3. shade time blocks based on past, present, future 
4. click time block to enter text event 
5. save the event for that timeblock
6. when page refreshes the saved events persist. local storage
