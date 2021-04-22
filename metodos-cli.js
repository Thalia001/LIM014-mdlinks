const unique = (links) => {
  const arrayLinks = links.map((res) => res.href); // res: es una propiedad y hace referencia a respuesta
  const hrefUnique = new Set(arrayLinks).size; // Set es un método que te va hacer un array pero solo con los datos únicos, set trabaja con size
  return hrefUnique;
};

const broke = (links) => {
  const arrayBroke = (links.filter((res) => res.status > 400)).length;
  return arrayBroke;
};
module.exports = { unique, broke };
