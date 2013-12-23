var PostView = require('./post');

var Posts = Backbone.View.extend({
  el: '#posts',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function () {
    var self = this;

    this.$el.empty();

    this.collection.each(function (post) {
      var postView = new PostView({ model: post });

      self.$el.append(postView.el);
    });

    return this;
  }
})

module.exports = Posts;