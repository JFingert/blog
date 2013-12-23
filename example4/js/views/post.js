var PostView = Backbone.View.extend({
  className: 'post',

  events: {
    'click #destroy-btn': 'destroyPost'
  },

  template: require('../../templates/post.hbs'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  destroyPost : function () {
    this.model.destroy();
  }

});

module.exports = PostView;