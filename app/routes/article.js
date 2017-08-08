import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },

  actions: {
  
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('index');
    }
  }
});
