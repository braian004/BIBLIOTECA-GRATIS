// Lista de libros
const libros = [
    // {   name:'logica de programacion',
    //     imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/fe54a4d8fe9043d6ee1df7ee837c9abb7b714160b4cdc7c5ca5c58b78ed02291.jpg',
    //     enlace: 'https://es.z-lib.gs/dl/11834441/296136?dsource=recommend',
    //     formato: 'PDF, 1.53 MB'
    // },
    // {   name:'24 tiempos verbales en ingles',
    //     imagen: 'https://s3proxy.cdn-zlib.sk/covers300/collections/userbooks/d9ad947722960649bfd9ded6083255e16115a0dd7740b399764eb55e3ce6d3d1.jpg',
    //     enlace: 'https://es.z-lib.gs/dl/5632057/9f34f4?dsource=recommend',
    //     formato: 'PDF ,3.4 MB'
    // },
    // {  name:'Casi nativo',
    //     imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/cf86103af0268400cdcdef3839fbcc6911b51e6d65e8af90b1a94b3f2f5af981.jpg',
    //     enlace: 'https://es.z-lib.gs/dl/11093580/7a7d69?dsource=recommend',
    //     formato: 'PDF 7.23 MB'
    // },
    //  {  name:'Inteligencia artificial',
    //     imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/47e43a7f68c6ab3ed7d29cdf453766063d4b7e431ff50dc79e97c89b561c6141.jpg',
    //     enlace: 'https://es.z-lib.gs/dl/11256367/98daca?dsource=recommend',
    //     formato: 'PDF 2.59 MB'
    // },
    // {   name:'Estructuras De Datos y Algoritmos: Una Introducción Sencilla',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/0376e5412730f50707566e97fd308567167f326b8294f551fb9d11f03000c138.jpg',
    //     enlace:'https://es.z-lib.gs/dl/11075747/917da0?dsource=recommend',
    //     formato:'pdf 395 KB'
    // },
    // {   name:'Aprende Python en un fin de semana',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/cd047398787ac484128565ec684863f741a81f5616d6a156046de1daa707be21.jpg',
    //     enlace:'https://es.z-lib.gs/dl/16734508/edcc63?dsource=recommend',
    //     formato:'pdf 4,4 MB'
    // },
    // // {   name:'Pytohn para analisis de datos',
    // //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/5ee7233bcbcd8f216f64b01aa29b97d1e48a3bceea0fee83331c03959c8e5dc3.jpg',
    // //     enlace:'https://es.z-lib.gs/dl/26508826/3409ff?dsource=recommend',
    // //     formato:'pdf 15,90 MB'
    // // },
    // {   name:'Git Pro',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/78081af3a9b0b4d53f159b8de740e14e078c5068faf278f7ff096d9f2ed577d2.jpg',
    //     enlace:'https://github.com/progit/progit2-es/releases/download/2.1.23/progit.pdf',
    //     formato:'pdf 10.0 MB'
    // },
    // {   name:'Fundamentos de base datos',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/84960db2ffbceb660dab6c8f5a2cc6d306c86658ff170584bf62d7d02c569af9.jpg',
    //     enlace:'https://es.z-lib.gs/dl/24107480/952b11',
    //     formato:'pdf 7.14 MB'
    // },
    // {   name:'Marketing 5.0',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/d2b9cd482fed9a721a27aff0209fa6bd6bdd5e70adf9c02feb73dedf79d50a2a.jpg',
    //     enlace:'https://es.z-lib.gs/dl/23364261/86a6e0',
    //     formato:'pdf 10.82 MB'
    // },
    {   name:'Ciencia de datos : técnicas analíticas y aprendizaje estadístico. Un enfoque práctico',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/e7af24a475a9a4de82238ebbdd7db6967ac120fb16cba0aabb8af49d9018cdb8.jpg ',
        enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/blob/master/Libro/Una%20Forma%20M%C3%A0s%20Inteligente%20de%20Aprender%20Python%20Aprenda%20m%C3%A1s%20r%C3%A1pido%20y%20recuerda%20m%C3%A1s%20(Spanish%20Edition)%20LANDRY%2C%20FABIEN%20.pdf',
        formato:'pdf 8.23 MB'
    },
    {   name:'Ciencia de datos : técnicas analíticas y aprendizaje estadístico. Un enfoque práctico',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/4126d8edc0f17959cf4f11b4829c034806cddd79f891abddb1e9f2114f816fbb.jpg',
        enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Ciencia%20de%20datos%20%20t%C3%A9cnicas%20anal%C3%ADticas%20y%20aprendizaje%20estad%C3%ADstico.%20Un%20enfoque%20pr%C3%A1ctico%20%28etc.%29.pdf',
        formato:'pdf 8.23 MB'
    }, 
    {   name:'Fundamentos de SQL',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/f21c130a2ca1b526369f22168995bd576298c16bf1eaac40986334c09bc8f030.jpg',
        enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Ciencia%20de%20datos%20%20t%C3%A9cnicas%20anal%C3%ADticas%20y%20aprendizaje%20estad%C3%ADstico.%20Un%20enfoque%20pr%C3%A1ctico%20%28etc.%29.pdf',
        formato:'pdf 2.61 MB'
    },
    // {   name:'Esto es marketing',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/02fc4fba35522edac61eb40c98bd8ec1937f4dfdf840d34ef26b3fa7184f5cef.jpg',
    //     enlace:'https://es.z-lib.gs/dl/11898989/cdc593?dsource=recommend',
    //     formato:'pdf 1.46 MB'
    // },
    // {   name:'Expert Secrets: The Underground Playbook for Creating a Mass Movement of People Who Will Pay for Your Advice',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/1e5affb9ffb8fabc4923a5d2cd224d708d7797e798c0815d7b6c6dd6ede9e7e1.jpg',
    //     enlace:'https://es.z-lib.gs/dl/11354488/09ffdf?dsource=recommend',
    //     formato:'pdf 3.84 MB'
    // },
    // {   name:'Python paso a paso',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/eda925a2fb89daa2ca868f897dcda7a2c766bf45037d6947d77c325585d184d4.jpg',
    //     enlace:'https://es.z-lib.gs/dl/15792487/6f276c?dsource=recommend',
    //     formato:'pdf 3.80 MB'
    // },
    // {   name:'Python para analisi de datos',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/b0fcf0e94d3918706e12a25af0e51f08ebe7af994c661e06d8698825d59611ac.jpg',
    //     enlace:'https://es.z-lib.gs/dl/18217424/cc5ae6?dsource=recommend',
    //     formato:'pdf 541 KB'
    // },
    // {   name:'Inteligencia de negocios y analítica de datos una vision global de business intelligence & analytics',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers300/collections/genesis/d63b941d078c0427a500813c1344721f56554737d6f205ada9c571255d777242.jpg',
    //     enlace:'https://es.z-lib.gs/dl/21084752/2c9580?dsource=recommend',
    //     formato:'pdf 121.74 MB'
    // },
    // {   name:'Ciencia de datos desde cero',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/d8738fd5d98acf882b094b5631bbe1f4f32e931bd2ab4e1376d24ca1ec677d50.jpg',
    //     enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Ciencia%20de%20datos%20%20t%C3%A9cnicas%20anal%C3%ADticas%20y%20aprendizaje%20estad%C3%ADstico.%20Un%20enfoque%20pr%C3%A1ctico%20%28etc.%29.pdf',
    //     formato:'pdf 9.11 MB'
    // },
    // {   name:'La Biblia del MySQL',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/e7b274ed2c4422cf3c3a4475380f0b9277655d16214dd048f688263021910aa8.jpg',
    //     enlace:'https://es.z-lib.gs/dl/983160/3eb12a?dsource=recommend',
    //     formato:'pdf 42.91 MB'
    // },
    {
        name: 'Node.js Javascript del lado del servidor',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/72aaa264e6d6a61882d3743d4e27b7d6beeab37283553f0e427194cf4fcd1afd.jpg',
        enlace: 'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Node.js%20Javascript%20del%20lado%20del%20servidor%20(Ismael%20L%C3%B3pez%20Quintero).pdf',
        formato: 'PDF, 3.5 MB'
    }
    
    // https://github.com/braian004/BIBLIOTECA-GRATIS.git
    // ,
    // {   name:'La via rapida del millonario',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/4433bd3d1af15b9c7c356b7b2b35fbf6910acd9f51740c2665a703f879050b6b.jpg',
    //     enlace:'https://es.z-lib.gs/dl/16966884/001894',
    //     formato:'pdf 6.28 MB'
    // },
    // {   name:'Essential Grammar in Use',
    //     imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/3e658cf08050b495239712745cd5ecbdff3329e923a6cc25f7236c7d21d9ed9e.jpg',
    //     enlace:'https://es.z-lib.gs/dl/5545418/0a861b',
    //     formato:'pdf 89.06 MB'
    // }
    // https://github.com/braian004/BIBLIOTECA-GRATIS.git
    // https://raw.githubusercontent.com/ --> para descarga directa 
];

// Contenedor de libros
const librosContainer = document.querySelector('.libros-container');

// Generar dinámicamente los libros
libros.forEach(libro => {
    const libroItem = document.createElement('div');
    libroItem.classList.add('libro-item');
    
    libroItem.innerHTML = `
        <img src="${libro.imagen}" alt="Portada de ${libro.name}">
        <a href="${libro.enlace}" download>Descargar (${libro.formato})</a>
    `;
    librosContainer.appendChild(libroItem);
});


// {/* <div class="libro-item">
//             <img src="https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/31c8d22ab1557b43390759a2d5876b46acb09964a8940f3a2595bbd2479ae89b.jpg" alt="Portada del libro">
//             <a href="https://es.z-lib.gs//dl/11125420/fcaaf9?dsource=recommend" download>Descargar (pdf, 224 KB)</a>
//         </div>
        
//         <div class="libro-item">
//             <img src="https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/e8566db90cd072fe129a19b3cec112b4c4878003f397aa6465450a406d461f78.jpg" alt="Portada del libro">
//             <a href="https://es.z-lib.gs//dl/3403845/2baa3d?dsource=recommend" download>Descargar (pdf, 11.64 MB)</a>
//         </div>
//         <div class="libro-item">
//             <img src="https://s3proxy.cdn-zlib.sk/covers1000/collections/userbooks/a7ec18adfaf574599ae42c4518e41f716ae96f2b6f9f125b7ae2e6f760686928.jpg" alt="Portada del libro">
//             <a class="btn btn-default addDownloadedBook" href="https://es.z-lib.gs/dl/18340422/30eaea?dsource=recommend" target="" data-book_id="18340422" data-isbn="" rel="nofollow">
//                 <i class="zlibicon-bookcard-download"></i>Descargar (<span class="book-property__extension">pdf</span> 30.94 MB)
//             </a>
//         </div>
    
//         <div class="libro-item">
//             <img src="https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/de8746290611220774e4b064d635b59e26047594be36092115882d887988cb9a.jpg"
//             alt="Portada del libro">
//             <a href="https://es.z-lib.gs/dl/18183287/8267f6?dsource=recommend" download>Descargar (pdf, 117 MB)</a>
//         </div>

//         <div class="libro-item">
//             <img src="https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/faf46d67a0f1b28f10dba8e78cb0aba563295d412fee7ba95d1da2542ccd6144.jpg" alt="Portada del libro">
//             <a href="https://es.z-lib.gs/dl/842117/891a9d?dsource=recommend" download>Descargar (pdf, 1.22 MB)</a>
//         </div> */}