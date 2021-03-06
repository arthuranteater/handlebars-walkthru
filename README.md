# handlebars walkthru

### The [deployed site](https://handlebars-sequelize.herokuapp.com/) references a private repo for security. The passcode is 71530 to create or edit entries.


1) In your database folder, review your think about how you would create those tables in sequelize.

2) Look at the rest of the mvc structure. What do you think should go where?

4) When building a server what are some of your dependencies?

5) Npm init -y, Npm i sequelize, express-handlebars, express, mysql2, and path.

6) Build out your server to start, make sure you have a port listening and you could try to add a simple get route to make sure express is running.

7) Once you have established that you have an express server running, create a connection to your mySQL server using sequelize. You can do this in your server.js, separate connection.js file, or directly in your model files.

8) Create your tables in the models folder based off the sql files.

9) Sync your tables and after runnning .define to add them to your db. You can sync each one separately (see activity 14.10 Sequelize Library) then export or export then sync in the server.js (harder option). Await the sync() then app.listen(). Check in your mySQL workbench for the newly created tables.

10) Create a file in your routes folder for all api routes and a file for all client or html routes.

11) Build some basic api routes and export the routes file, call the routes after the sync passing the routes app and your models if you are syncing the models in your server.js. If you are sync()ing in your models then you don't have to pass app and models because you are exporting the module after it's been initialized and synced. I recommend starting with a get request to findAll() sending back json.

12) You should get back an empty array. So how do create seed data? Write a post request to add a kid to the coding kids table.

13) Open up POST monnn aka Postman and enter in a post request. Make sure your server is running, you are pinging the correct api route, and you are typing in the correct place to place in req.body.

14) Once you have successfully created a post, view it with a get request. Do the same for update and delete requests.

15) Congrats! You've made it over halfway.

16) Think about the frontend using handlebars. Reference an older project from section 13.

17) Connect your handlebars to express and use app.engine and serve your static files in the public folder. (reference previous examples in section 13 MVC like 13.10 WatchList) Create a index.handlebars in your views folder. Add a layouts folder inside your views folder. Create a file called main.handlebars inside your layouts folder.  

18) Create a basic template for your main.handlebars (reference previous examples in section 13 MVC like 13.10 WatchList).

19) Think about how you want your index page to look which will be were send our handlebars variables. You should be able to use your own CSS and JS files inside your public folder (the static files you are serving). Remember frontend JS? CSS? Those are still things! If you want, you can use a CSS framework. I'll be using bootstrap.

20) Inside your index.js add some html. Then write get request that returns a res.render() to test out the handlebars and make sure you get something back. (reference previous examples in section 13 MVC like 13.10 WatchList). If you get something back, then write a kids.findAll query and send the query data using a handlebars variable to your index.handlebars file in res.render(). Receive this handlebars variable in your index.handlebars by  running a {{your_handlebars_variable_here}}. Test it out you should get your data on the frontend.

21) Now you've got handlebars running and giving you query data. Build out your index.handlebars to the format you want with inputs for updating and taking in data. I'll use boostrap cards to show my kids. 

22) Create all of your frontend ajax calls (get, post, put, delete) in your public js file or in a script tag inside the index.handlebars.

23) Now test out the app and troubleshoot!

24) Extra stuff: add a place to add parents, add hobbies, run query to find all where age equals, run a join to show which hobbies are shared by which

25) Deploy to Heroku!






