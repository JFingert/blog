var AddPost = Backbone.View.extend({
  el: '#addPost',

  template: require('../../templates/addpost.hbs'),

  events: {
    'click button': 'newPost'
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  newPost: function () {
    var post = {}
    // This is bad! Never accept raw values from input forms!!!!
    post.title = this.$el.find('#newPostTitle').val()
    post.content = this.$el.find('#newPostContent').val();

    this.collection.unshift(post).save();
  }

});

module.exports = AddPost;