import Vue from 'vue';
import { capitalize, camelCaseComponentName, truncate } from './utils';

/**
 * register components globally
 */
const requireComponent = require.context('./components', false, /Base[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = capitalize(camelCaseComponentName(fileName));
  Vue.component(componentName, componentConfig.default || componentConfig);
});

/**
 * Filters
 */
Vue.filter('truncate', (value, length = 100) => {
  return value.length > length ? truncate(value, length) : value;
});
