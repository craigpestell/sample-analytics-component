import Backbone from 'backbone';
import Analytics from '@component/analytics';
import Model from '../models/sample-analytics-component';
import template from '../../templates/views/sample-analytics-component.hbs';

export default Backbone.View.extend({
  el: '#sample-analytics-component-main',

  events: {
    'click #test-click': 'notifyUser',
  },

  initialize() {
    this.model = new Model();
    this.model.set('abc', 'xyz');
  },

  render() {
    this.$el.html(template(this.model.toJSON()));
  },

  notifyUser() {
    // eslint-disable-next-line no-console
    console.log('click happened');

    Analytics.track('sample-analytics-component:notifyUser', this.model);
    // eslint-disable-next-line no-alert
    alert('it did the thing');
  },
});
