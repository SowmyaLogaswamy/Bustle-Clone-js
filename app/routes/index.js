import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    articles: this.store.findAll('article')
  });
},

actions: {
saveArticle(params) {
     var newArticle = this.store.createRecord('article', params);
     newArticle.save();
     this.transitionTo('index');
   }
  }
});
