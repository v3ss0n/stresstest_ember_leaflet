import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr("string"),
  longitude: DS.attr("number"),
  latitude: DS.attr("number"),
  location: Ember.computed('latitude', 'longitude', function() {
    let point= [this.get('latitude'),this.get('longitude')]
    return point ;
  })
});
