import bcrypt from 'bcryptjs';

const data = {
   users: [
      {
      name: 'Hamood',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      },
      {
         name: 'Usama',
         email: 'user@example.com',
         password: bcrypt.hashSync('1234', 8),
         isAdmin: false,
      }
],
 products:[
        {
           name: 'Nike Slim Shirt',
           category: 'shirts',
           image: '/images/p1.jpg',
           price: 120,
           countInStock: 10,
           brand: 'Nike',
           rating: 4.5,
           numReviews: 10,
           description: 'high quality product',
        },
        {
            name: 'Adidas Slim Shirt',
            category: 'shirts',
            image: '/images/p2.jpg',
            price: 125,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.8,
            numReviews: 20,
            description: 'high quality product',
         },
         {
            name: 'Lacoste Free Shirt',
            category: 'shirts',
            image: '/images/p3.jpg',
            price: 110,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.3,
            numReviews: 16,
            description: 'high quality product',
         },
         {
            name: 'Nike Slim Pant',
            category: 'pants',
            image: '/images/p4.jpg',
            price: 80,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            description: 'high quality product',
         },
         {
            name: 'Puma Slim pant',
            category: 'pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'puma',
            rating: 4.5,
            numReviews: 12,
            description: 'high quality product',
         },
         {
            name: 'Adidas Fit pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 115,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
         },
    ],
};

export default data;