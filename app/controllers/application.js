import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyEarth: function() {
      alert('BOOM');
    },
    destroyMoon: function () {
      alert('boom');
    }
  }
});
