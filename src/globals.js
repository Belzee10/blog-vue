import Vue from 'vue';
import { capitalize, camelCaseComponentName } from './utils';

const requireComponent = require.context('./components', false, /Base[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = capitalize(camelCaseComponentName(fileName));
  Vue.component(componentName, componentConfig.default || componentConfig);
});
