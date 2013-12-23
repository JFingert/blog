$(function () { // wait for on-ready

  // Login / Auth stuff
  var blogRef = new Firebase('https://dlmanning.firebaseio.com');
  var auth = new FirebaseSimpleLogin(blogRef, function(error, user) {
    if (error) {
      console.log(error);
    } else if (user) {
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      app.collections.posts.fetch();
    } else {

    }
  });

  var AddPostsView = require('./views/addpost');
  var PostsView = require('./views/posts');
  var EntriesView = require('./views/entries');

  var app = {};

  app.collections = {};
  app.views = {};

  var Post = Backbone.Model.extend({
    defaults: {
      title: "A post!",
      content: "Lorem Ipsum Baby!",
      date: new Date(),
      display: true
    },

  });

  var Posts = Backbone.Collection.extend({
    model: Post,
    firebase: new Backbone.Firebase('https://dlmanning.firebaseio.com')
//    localStorage: new Backbone.LocalStorage("posts")
  });

  app.collections.posts = new Posts();

  app.views.addpost = new AddPostsView({collection: app.collections.posts});
  app.views.posts = new PostsView({collection: app.collections.posts});
  app.views.entries = new EntriesView({collection: app.collections.posts});

  window.app = app;

});