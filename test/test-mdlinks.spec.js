const mdlinks = require('../mdLinks');

const finaloutput = [
  {
    // status: 200,
    // message: 'OK',
    href: 'https://www.youtube.com',
    text: 'Youtube',
    file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
  },
  {
    // status: 200,
    // message: 'OK',
    href: 'http://www.facebook.com',
    text: 'Facebook',
    file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
  },
  {
    // status: 200,
    // message: 'OK',
    href: 'http://www.twitter.com',
    text: 'Twitter',
    file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
  },
];

const relativePath = 'pruebas/pruebas.md';

describe('mdlinks', () => {
  it('should be a function', () => {
    expect(typeof mdlinks).toBe('function');
  });
  it('should validate md-links', (done) => {
    mdlinks(relativePath)
      .then((res) => {
        expect(res).toEqual(finaloutput);
        done();
      });
  });
});
