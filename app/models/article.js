import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  starter: DS.attr(),
  date: DS.attr()
});
