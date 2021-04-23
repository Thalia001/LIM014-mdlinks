// Path: Proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');
// fs: Proporciona una API para interactuar con los ficheros y directorios.
const fs = require('fs');
// axios: Proporciona la librería axios.
const axios = require('axios');

const dirRelative = 'pruebas';
const absolute = 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md';

// Valida si la ruta exite
const validateRoute = (route) => fs.existsSync(route);
// console.log('existe', validateRoute(dirRelative));

// Convierte la ruta en absoluta
const pathConverseAbsolute = (route) => path.resolve(route);
// console.log('pathConverseAbsolute', pathConverseAbsolute(dirRelative));
// Es un archivo?
// Primer método sincrono
const fileValidation = (route) => fs.statSync(route).isFile();
// console.log('fileValidation', fileValidation(absolute));
// Leer archivo
const readFile = (route) => fs.readFileSync(route, { encoding: 'utf8', flag: 'r' });
// console.log('readFile', readFile(absolute));
// Es un directorio?
const dirValidation = (route) => fs.statSync(route).isDirectory();
// console.log('dirValidation', dirValidation(dirRelative));
// Leer directorio
const readDirectory = (route) => fs.readdirSync(route);
// console.log('readDirectory:', readDirectory(dirRelative));
// ¿Es un archivo md?
// extname: obtiene la extensión de una ruta de archivo (md)
const markDown = (route) => path.extname(route) === '.md'; 
// console.log('markDown', markDown(absolute));

// esta función obtiene todos los archivos .md desde un archivo o directorio
const getAllFiles = (absPath) => {
  let arrFiles = [];
  if (fileValidation(absPath)) {
    arrFiles.push(absPath);
  } else {
    readDirectory(absPath).forEach((file) => {
      const completePath = path.join(absPath, file);
      const recursive = getAllFiles(completePath);
      arrFiles = arrFiles.concat(recursive);
    });
  }
  const mdPath = arrFiles.filter((route) => markDown(route));
  return mdPath;
};
// console.log('obtener archivos', getAllFiles(dirRelative));

// Buscar Links
const searchLinks = (route) => {
  // console.log(route);
  const array = [];
  const absPath = pathConverseAbsolute(route);
  getAllFiles(absPath).forEach((file) => {
    const regex = /\[(.*)\]\(((?!#).+)\)/gi;
    const links = readFile(file)
      .match(regex)
      .map((u) => u.split('](')[1].slice(0, -1));
    const text = readFile(file)
      .match(regex)
      .map((u) => u.split('](')[0].slice(1));
    links.forEach((link, i) => {
      array.push({
        href: link,
        text: text[i],
        file,
      });
    });
  });

  return array;
};
// console.log('fin', searchLinks(dirRelative));

// validar links de array
const validateLinks = (arrLiknsValidate) => {
  // console.log(arrLiknsValidate);
  const arr = arrLiknsValidate.map(
    (obj) => axios
      .get(obj.href)
      .then((url) => (
        {
          status: url.status,
          message: url.status === 200 ? url.statusText : 'FAIL',
          ...obj,
        }
      ))
      .catch(() => ({ status: 404, message: 'FAIL', ...obj })), // los 3 puntos, sirve para editar el objeto 
  );
  return Promise.all(arr);
};
// validateLinks(searchLinks(absolute)).then((url) => console.log(url));

module.exports = {
  validateRoute,
  pathConverseAbsolute,
  fileValidation,
  readFile,
  dirValidation,
  readDirectory,
  markDown,
  getAllFiles,
  searchLinks,
  validateLinks,
};
