const {
  pathConverseAbsolute,
  fileValidation,
  dirValidation,
  markDown,
  readFile,
  readDirectory,
  getAllFiles,
  searchLinks,
} = require('../index.js');

const dirRelative = 'pruebas';
const absolute = 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md';

describe('pathConverseAbsolute', () => {
  it('should be a function', () => {
    expect(typeof pathConverseAbsolute).toBe('function');
  });
  it('should convert the path to absolute', () => {
    expect(pathConverseAbsolute(dirRelative)).toBe('C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas');
  });
});

describe('fileValidation', () => {
  it('should be a function', () => {
    expect(typeof fileValidation).toBe('function');
  });
  it('should validate if it is a file', () => {
    expect(fileValidation(absolute)).toBe(true);
  });
});

describe('dirValidation', () => {
  it('should be a function', () => {
    expect(typeof dirValidation).toBe('function');
  });
  it('should validate if it is a directory', () => {
    expect(dirValidation(dirRelative)).toBe(true);
  });
});

describe('markDown', () => {
  it('should be a function', () => {
    expect(typeof markDown).toBe('function');
  });
  it('it should validate if it is an md file', () => {
    expect(markDown(absolute)).toBe(true);
  });
});

describe('readFile', () => {
  it('should be a function', () => {
    expect(typeof readFile).toBe('function');
  });
  it('should read the file', () => {
    expect(readFile(absolute)).toBe('\r\nA continuación de muestran link de prueba para el proyecto\r\n\r\n[Youtube](https://www.youtube.com)\r\n[Facebook](http://www.facebook.com)\r\n[Twitter](http://www.twitter.com)'); // Secuencia de escape
  });
});

describe('readDirectory', () => {
  it('should be a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('should read the directory', () => {
    expect(readDirectory(dirRelative)).toEqual(['maspruebas.md', 'nuevolink.md', 'pruebas.md']);
  });
});

describe('markDown', () => {
  it('should be a function', () => {
    expect(typeof markDown).toBe('function');
  });
  it('it should validate if it is an md file', () => {
    expect(markDown(absolute)).toBe(true);
  });
});

describe('getAllFiles', () => {
  it('should be a function', () => {
    expect(typeof getAllFiles).toBe('function');
  });
  it('should return the file path', () => {
    expect(getAllFiles(dirRelative)).toStrictEqual([
      'pruebas\\maspruebas.md',
      'pruebas\\nuevolink.md',
      'pruebas\\pruebas.md',
    ]);
  });
});

describe('searchLinks', () => {
  it('should be a function', () => {
    expect(typeof searchLinks).toBe('function');
  });
  it('should search for the links', () => {
    expect(searchLinks(dirRelative)).toStrictEqual([
      {
        href: 'https://www.youtube.com1',
        text: 'Youtube',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\maspruebas.md',
      },
      {
        href: 'https://www.github.com',
        text: 'GitHub',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\maspruebas.md',
      },
      {
        href: 'http://www.twitter.com',
        text: 'Twitter',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\maspruebas.md',
      },
      {
        href: 'http://www.platzi.com',
        text: 'Platzi',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\nuevolink.md',
      },
      {
        href: 'https://www.youtube.com',
        text: 'Youtube',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
      },
      {
        href: 'http://www.facebook.com',
        text: 'Facebook',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
      },
      {
        href: 'http://www.twitter.com',
        text: 'Twitter',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
      },
    ]);
  });
});
