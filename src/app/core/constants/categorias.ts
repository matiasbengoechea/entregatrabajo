import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Burgers',
    id: 250,
    imgUrl: 'https://i.pinimg.com/564x/89/d5/d3/89d5d3aeeeb882ae4169d2fef52302a3.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Chicken Little',
        precio: 3500,
        ingredientes: ['Hamburguesa de pollo', 'queso fundido', 'tomate ', 'lechuga'],
        imagen:
          'https://i.pinimg.com/564x/90/b7/0a/90b70a5f0f586eb23370e260af5433e8.jpg',
      },
      {
        id: 2,
        nombre: 'Cowie',
        precio: 3000,
        ingredientes: ['Medallon de carne', 'Queso roquefort', 'Bacon'],
        imagen:
          'https://i.pinimg.com/564x/ef/26/e0/ef26e06eeb97293818582d24a2c93c23.jpg',
      },
      {
        id: 3,
        nombre: 'Doble chhezy',
        precio: 3800,
        ingredientes: ['Doble medallón de carne','Doble queso cheddar'],
        imagen:
          'https://i.pinimg.com/564x/a0/ba/0f/a0ba0f5c3c8f1691df5825a4caf71192.jpg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://i.pinimg.com/564x/3b/d2/99/3bd299ad0d6b92c26d193ef7c3b743b3.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Chicken Ranch',
        precio: 5000,
        ingredientes: ['Muzarella', 'Pollo', 'Sals Caesar'],
        imagen:
          'https://i.pinimg.com/564x/63/53/b2/6353b24f8ebe6ff7b0d51615909f73f9.jpg',
      },
      {
        id: 5,
        nombre: 'Pizza cantimpalo',
        precio: 5500,
        ingredientes: ['Muzarella', 'Aceitunas', 'Morrones', 'Tomate', 'Huevo'],
        imagen:
          'https://i.pinimg.com/564x/0e/02/a1/0e02a17d1450ad7acb79a61e82742717.jpg ',
      },
      {
        id: 6,
        nombre: 'Pizza 4 quesos',
        precio: 6000,
        ingredientes: ['Muzarella', 'Roquefort', 'Provolone', 'Parmesano'],
        imagen:
          'https://i.pinimg.com/564x/92/03/5e/92035ef9a3852b1eaeec1688cd53926d.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:'https://i.pinimg.com/564x/6c/8b/7a/6c8b7a71d7497e642a46e8dce1b5e17b.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Cheesecake',
        precio: 2000,
        ingredientes: ['Tarta de queso con glaseado de frutos rojos'],
        imagen: 'https://i.pinimg.com/564x/05/9f/2f/059f2f570464889d15e46b6c7d6545cb.jpg',
      },
      {
        id: 8,
        nombre: 'Volcán de chocolate',
        precio: 3000,
        ingredientes: ['La especialidad de la casa'],
        imagen:
          'https://i.pinimg.com/564x/cc/78/02/cc7802813301db94135ef54899b0c9cf.jpg',
      },
      {
        id: 9,
        nombre: 'Brownie con helado',
        precio: 2500,
        ingredientes: ['Brownies caseros con bocha de helado americana'],
        imagen:
          'https://i.pinimg.com/564x/33/d6/f8/33d6f849508a39bcd8c2201f513efd70.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:'https://i.pinimg.com/564x/b3/69/51/b369515225497b8ee74a0e779f4e936e.jpg',
    productos: [
      {
        id: 10,
        nombre: 'Agua mineral',
        precio: 700,
        ingredientes: ['Agua Villvicencio', ' Bonaqua'],
        imagen:
          'https://i.pinimg.com/564x/b6/da/ff/b6daff9bc11893ca5370ccf06ee11487.jpg',
      },
      {
        id: 11,
        nombre: 'Smoothie Frutilla',
        precio: 1000,
        ingredientes: ['Batido de leche con frutilla'],
        imagen:
          'https://i.pinimg.com/564x/68/9d/d9/689dd963c1f023d74f62561ef960e8a8.jpg',
      },
      {
        id: 12,
        nombre: 'Gaseosas',
        precio: 800,
        ingredientes: ['Pepsi', 'Sprite', 'Fanta'],
        imagen:
          'https://i.pinimg.com/564x/18/0e/08/180e08c990206531d9e7760512a8cc75.jpg',
      },
    ],
  },
];
