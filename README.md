# task-randostore
Front end task Randostore

Implemented features include:
  * Page for items listing.
  * Page for add items.
  * Page for cart.

I used a seed project for basic setup ( boilerplate ) of app which did have setup for unit tests though I didnot get a time to implement any.

Things done from nice to haves:
  * Front end search of items on items listing page.
  * Data persistent of cart across browser's multiple tabs. Please note that the data will be persistent across the same browser's    multiple tabs not across multiple browsers. Reason being as I am using local storage for data persistence not sockets.
  * Auto items reloading (items listing page ) on items add. This has been done using broadcast channels. Again auto reloading will be on same browser's multiple tabs not across different broswers because of not using sockets. Though I would personally say that sockets would be the optimal solution for this.
  * Some basic validations on add item form ( Required fields, Price cant be negative, Price cant be character)

As far as the time taken is concerned. I tried to keep a track of time. It took around 7.5-8 hrs for this.
Time division:
  * 1 hr basic AngularJS documentation reading. Since I didn't have any prior experience with AngularJS, I considered it'll be fruitless if I dive blindlessly into the task. So I spent around 1 hr reading some of the basics of AngularJS. As I did have experience with newer versions of Angular (2,4,5) so I found quite a lot fimilarities which enabled me to start the project with some know how in a short time.
  * 6.5-7 hrs for implementation of task.
