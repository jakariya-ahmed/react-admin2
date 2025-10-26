import { image } from "framer-motion/client";
import { getRandomDate } from "../utils/generateRandomDate";

export const dashboardStats = {
  totalSales: 12450,
  totalRevenue: 84500,
  totalCustomers: 1560,
  totalOrders: 380,
};

export const salesTrendData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4780 },
  { month: "May", sales: 5890 },
  { month: "Jun", sales: 4390 },
  { month: "Jul", sales: 6490 },
];

export const categoryDistribution = [
  { name: "Electronics", value: 35 },
  { name: "Fashion", value: 25 },
  { name: "Home", value: 20 },
  { name: "Beauty", value: 10 },
  { name: "Sports", value: 10 },
];


export const topSellingProducts = [
  {
    name: "Ethnic School bag for children",
    sales: 1200,
    image: "/img/tp.png",
  },
  {
    name: "Childrens Teddy toy of high quality",
    sales: 900,
    image: "/img/tp-2.png",
  },
  {
    name: "Leather jacket for men",
    sales: 750,
    image: "/img/tp-1.png",
  },
  {
    name: "Orange smart watch with square dial",
    sales: 680,
    image: "/img/tp-4.png",
  },
  {
    name: "White shirt for man",
    sales: 450,
    image: "/img/tp-5.png",
  },
  {
    name: "Dslr Camera ",
    sales: 550,
    image: "/img/tp-6.png",
  },
    {
    name: "Orange smart watch with square dial",
    sales: 680,
    image: "/img/tp-4.png",
  },
  {
    name: "White shirt for man",
    sales: 450,
    image: "/img/tp-5.png",
  },
    {
    name: "Leather jacket for men",
    sales: 750,
    image: "/img/tp-1.png",
  },
];


export const products = [
  {
    id: 1,
    cat: 'Fashion',
    name: "Ethnic School bag for children",
    price: 1200,
    image: "/img/tp.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 2,
    cat: 'Toddy',
    name: "Childrens Teddy toy of high quality",
    price: 950,
    image: "/img/tp-1.png",
    stock: 'Stock Out',
    date: getRandomDate(),
  },
  {
    id: 3,
    cat: 'Electronic',
    name: "Orange smart watch with square dial",
    price: 1300,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 4,
    cat: 'Fashion',
    name: "Leather jacket for men",
    price: 1200,
    image: "/img/tp-3.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 5,
    cat: 'Fashion',
    name: "White shirt for man",
    price: 1200,
    image: "/img/tp-4.png",
    stock: 'Stock Out',
    date: getRandomDate(),
  },
  {
    id: 6,
    cat: 'Fashion',
    name: "Ethnic School bag for children",
    price: 1200,
    image: "/img/tp-5.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 7,
    cat: 'Electronic',
    name: "Dslr Camera",
    price: 1200,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
]

export const TopCusts = [
  {
    id: 1,
    name: 'Emma Wilson',
    image: '/img/customers/cust.jpg',
    purchases: 143,
    price: 24078
  }, 
  {
    id: 2,
    name: 'John Smith',
    image: '/img/customers/cust-1.jpeg',
    purchases: 143,
    price: 9805
  }, 
  {
    id: 3,
    name: 'Michel Rasel',
    image: '/img/customers/cust-2.jpg',
    purchases: 143,
    price: 24509
  }, 
  {
    id: 4,
    name: 'Smith Keyosaki',
    image: '/img/customers/cust-3.jpeg',
    purchases: 143,
    price: 24009
  }, 
  {
    id: 5,
    name: 'Robert Lewis',
    image: '/img/customers/cust.jpg',
    purchases: 143,
    price: 3459
  }, 
  {
    id: 6,
    name: 'Emma Wilson',
    image: '/img/customers/cust-3.jpeg',
    purchases: 143,
    price: 24889
  }, 
  {
    id: 7,
    name: 'Emma Wilson',
    image: '/img/customers/cust.jpg',
    purchases: 143,
    price: 28078
  }, 
   {
    id: 7,
    name: 'Emma Wilson',
    image: '/img/customers/cust-2.jpg',
    purchases: 143,
    price: 24078
  },
]