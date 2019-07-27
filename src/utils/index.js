/**
 * Simple functions for use in the project ;)
 */

/**
 * UpperCase the first letter
 * @param {String} str
 */
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1, str.lentgh);

/**
 * remove the chars in the start and the ext name, LowerCase the first letter
 * @param {String} str
 */
const camelCaseComponentName = str => {
  const component = str.replace(/^\.\//, '').replace(/\.\w+$/, '');
  return component.charAt(0).toLowerCase() + component.slice(1, component.lentgh);
};

export { capitalize, camelCaseComponentName };
