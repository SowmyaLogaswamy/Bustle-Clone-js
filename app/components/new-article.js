import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    saveArticle() {
     var params = {
       heading: this.get('heading'),
       image: this.get('image'),
       author: this.get('author'),
       content: this.get('content'),
       starter: this.get('starter'),
       date: this.get('date')
     };
     this.set('addNewArticle', false);
     this.sendAction('saveArticle', params);
   }
  }
});
