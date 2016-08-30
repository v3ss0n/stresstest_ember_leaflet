import Ember from 'ember';
const {
  computed,
  inject
} = Ember

export default Ember.Controller.extend({

  center: null,
  zoom: 13,
  lat: 16.79,
  lng: 96.15,
  radius: null,
  filteredLocations: computed("center", "radius", function() {
    var radiusM = this.get('radius')
    var center = this.get('center')

    return this.get("store").findAll("pokemon")

  }),
  actions: {
    openModal: function(name) {
      $('.ui.' + name + '.modal').modal('show');
    },

    focusCenter(e) {
      let layer = e.target

    },
    updateCenter(e) {
      let map = e.target
      var mapBoundNorthEast = map.getBounds().getNorthEast();
      var mapDistance = mapBoundNorthEast.distanceTo(map.getCenter());
      var radiusKM = mapDistance / 1000;
      let center = e.target.getCenter();
      this.set("radius", mapDistance )
      this.set('center', center)

    }
  }
});
