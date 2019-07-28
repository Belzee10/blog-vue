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

/**
 * truncate a string
 * @param {*String} str
 * @param {Number} length
 */
const truncate = (str, length) => {
  if (!str) return '';
  const value = str.toString();
  return `${value.slice(0, length)}...`;
};

/**
 * transform search query
 * @param {Object} query
 */
const transformFilter = ({ searchText, sortingBy }) => {
  const sortingMap = {
    popularity_desc: {
      by: 'popularity',
      order: 'desc'
    },
    popularity_asc: {
      by: 'popularity',
      order: 'asc'
    },
    date: {
      by: 'date',
      order: 'asc'
    }
  };
  return {
    searchText,
    sortBy: sortingBy
      ? sortingMap[sortingBy]
      : {
          by: '',
          order: ''
        }
  };
};

export { capitalize, camelCaseComponentName, truncate, transformFilter };
