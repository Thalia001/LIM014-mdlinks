const {
  validateRoute,
  searchLinks,
  validateLinks,
} = require('./index');

const mdlinks = (path, options) => new Promise((resolve, reject) => {
  if (validateRoute(path) === true) {
    if (options === true) {
      const allLinks = validateLinks(searchLinks(path));
      resolve(allLinks);
    } else {
      const allLinks = searchLinks(path);
      resolve(allLinks);
    }
  } else {
    reject('la ruta no existe');
  }
});
// console.log(mdLinks('pruebas/pruebas.md', true).then((res) => console.log(res)));

module.exports = mdlinks;
// Se exporta la función
