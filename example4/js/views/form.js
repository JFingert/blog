var FormView = Backbone.View.extend({
  el: '#form',

  template: require('../../templates/form.hbs'),

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'add', this.render());

  },
  events: {
    'click button' : 'newPost'
    'click #about' : 'about'
  },

  render: function () {
   
    this.$el.html(this.template());

    return this;
  },

  newPost: function (postTitle, postContent) {
    var post = {};
    post.title = this.$el.find('#postTitle').val();
    post.content = this.$el.find('#postContent').val();

    this.collection.unshift(post).save();
  },

  about: function () {
    var bio = "This blog is for your reading enjoyment";
    $('bio').popover('show');
  }
});

module.exports = FormView;