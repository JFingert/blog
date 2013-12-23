$(function () { // wait for on-ready
  //app.collections.posts.create({title: "Today's Post", content: "...About pancakes!"})
  //make so not signed in can view

    // Login / Auth stuff
  var blogRef = new Firebase('https://dlmanning.firebaseio.com');
  var auth = new FirebaseSimpleLogin(blogRef, function(error, user) {
    if (error) {
      console.log(error);
    } else if (user) {
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      startUp();
      app.collections.posts.fetch();
    } else {
      $button = $('<button-type="button class="btn btn-primary">Login</button>');
      $button.click(function () {
      auth.login('github');
    });
         ('.page-header').append($button);
    }
     });
   });
 
function startUp () {

  var PostsView = require('./js/views/posts');
  var NavView = require('./js/views/nav');
  var FormView = require('./js/views/form');

  var app = {};

  app.collections = {}
  app.views = {}

  var Post = Backbone.Model.extend({
    defaults: {
      title: "A post!",
      content: "Lorem Ipsum Baby!",
      date: new Date(),
      display:true
    }
  });

  var Posts = Backbone.Collection.extend({

    model: Post,
    firebase: new Backbone.Firebase('https://blogofvoodoo.firebaseio.com')
    // localStorage: new Backbone.LocalStorage("posts")
  });

  app.collections.posts = new Posts();

  app.views.posts = new PostsView({collection: app.collections.posts});
  app.views.entries = new NavView({collection: app.collections.posts});
  app.views.form = new FormView({collection: app.collections.posts});

  app.collections.posts.fetch();

  window.app = app;
}