export function encodeQueryString (params = {}) {
  // SOURCE: https://howchoo.com/javascript/how-to-turn-an-object-into-query-string-parameters-in-javascript
  return Object.keys(params).map(key => key + '=' + params[key]).join('&')
}

export function getBiggestNumber (arr, field) {
  return arr.reduce(
    (acc, el) => Number(acc[field]) > Number(el[field]) ? acc : el
  )
}

export function getSum (arr, field) {
  return arr.reduce((acc, el) => (acc + Number(el[field])), 0)
}

export function now () {
  // SOURCE: https://dev.to/racztiborzoltan/javascript-format-date-as-yyyy-mm-dd-4ef3
  return new Date().toISOString().slice(0, 10)
}
