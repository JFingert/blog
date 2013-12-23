var NavBar = Backbone.View.extend({
  el: '#nav',

  template: require('../../templates/nav.hbs'),

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, 'remove', this.render)
    this.listenTo(this.collection, 'change', this.render)    
   
  },

  render: function () {
    var self = this;

    this.$el.empty();

    this.collection.each(function (entry) {
      var $entryTitle = $(self.template(entry.toJSON()));
      
      $entryTitle.click(function () {
        if(entry.get('display') === true) {
          entry.set('display', false);
        } else {
          entry.set('display', true);
        }
      });

      self.$el.append($entryTitle);
    });

    return this;
  }
})

module.exports = NavBar;