jest.mock('axios');
const axios = require('axios');
const { validateLinks } = require('../index');

describe('validateLinks', () => {
  test('should is a function', () => {
    const finaloutput = [
      {
        status: 200, // status = key , 200 = value
        message: 'OK',
        href: 'http://www.twitter.com',
        text: 'Twitter',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\nuevolink.md',
      },
    ];
    const initial = [
      {
        href: 'http://www.twitter.com',
        text: 'Twitter',
        file: 'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\nuevolink.md',
      },
    ];
    const axiosRespon = { status: 200, statusText: 'OK' };
    axios.get.mockResolvedValue(axiosRespon); 
    return validateLinks(initial).then((res) => {
      expect(res).toEqual(finaloutput);
    });
  });
});
// mockResolvedValue: es un método que trabaja con promesas (es una simulación de una promesa)

// describe('validateLinks', () => {
//   it('should be a function', () => {
//     expect(typeof validateLinks).toBe('function');
//   });
//   it('should validate link', async () => {
//     const arrLiknsValidate = [
//       {
//         href: 'https://www.youtube.com',
//         text: 'Youtube',
//         file:
//           'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
//       },
//       {
//         href: 'http://www.facebook.com',
//         text: 'Facebook',
//         file:
//           'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
//       },
//       {
//         href: 'http://www.twitter.com',
//         text: 'Twitter',
//         file:
//           'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
//       },
//     ];

//     const finaloutput = [
//       {
//         status: 200,
//         message: 'OK',
//         href: 'https://www.youtube.com',
//         text: 'Youtube',
//         file:
//           'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
//       },
//       {
//         status: 200,
//         message: 'OK',
//         href: 'http://www.facebook.com',
//         text: 'Facebook',
//         file:
//           'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
//       },
//       {
//         status: 200,
//         message: 'OK',
//         href: 'http://www.twitter.com',
//         text: 'Twitter',
//         file:
//           'C:\\Users\\Thalia\\Desktop\\PROYECTOS LABORATORIA\\TERCER PROYECTO - MDLINKS\\LIM014-mdlinks\\pruebas\\pruebas.md',
//       },
//     ];

//     expect(await validateLinks(arrLiknsValidate)).toEqual(finaloutput);
//   });
// });
