import { ICategory, IProduct } from "./interface";

export const OfferProducts:IProduct[] = [
    { id:1, title:'Organic Bananas', price: '$4.99', thumbnail: require('./assets/images/product-banana.png'), quantity:'12pcs'},
    { id:2, title:'Red Apple', price: '$4.99', thumbnail: require('./assets/images/product-apple.png'), quantity:'1kg',
    images:[
        require('./assets/images/apple-1.png'), require('./assets/images/apple-2.jpg'),
        require('./assets/images/apple-3.jpg'), require('./assets/images/apple-4.jpg')
    ]},
    { id:3, title:'Organic Bananas', price: '$9.98', thumbnail: require('./assets/images/product-banana.png'), quantity:'24pcs'},
    { id:4, title:'Red Apple', price: '$9.98', thumbnail: require('./assets/images/product-apple.png'), quantity:'2kg'}
]

export const SellingProducts:IProduct[] = [
    { id:1, title:'Bell Pepper Red', price: '$4.99', thumbnail: require('./assets/images/product-bell-pepper.png'), quantity:'1kg, Priceg',},
    { id:2, title:'Ginger', price: '$4.99', thumbnail: require('./assets/images/product-ginger.png'), quantity:'250gm, Priceg'},
    { id:3, title:'Bell Pepper Red', price: '$9.98', thumbnail: require('./assets/images/product-bell-pepper.png'), quantity:'2kg, Priceg'},
    { id:4, title:'Ginger', price: '$9.98', thumbnail: require('./assets/images/product-ginger.png'), quantity:'500gm, Priceg'},
]

export const CarouselItems = [
    { image: require("./assets/images/slider-banner.png") },
    { image: require("./assets/images/slider-banner-1.png") },
    { image: require("./assets/images/slider-banner-1.png") }
]

export const Category:ICategory[] = [
    {title:'Pulses', image:require('./assets/images/category-pulses.png'), bgColor:'#fef2e6'},
    {title:'Rice', image:require('./assets/images/category-rice.png'), bgColor:'#e7f4eb'}
]

export const BeverageProducts:IProduct[] = [
    { id:1, title:'Diet Coke', price: '$1.99', thumbnail: require('./assets/images/product-diet-coke.png'), quantity:'355ml, Price',},
    { id:2, title:'Sprite Cane', price: '$1.50', thumbnail: require('./assets/images/product-sprite-cane.png'), quantity:'325ml, Price'},
    { id:3, title:'Apple & Grape Juice', price: '$15.98', thumbnail: require('./assets/images/product-apple-juice.png'), quantity:'2L, Price'},
    { id:4, title:'Orange Juice', price: '$15.98', thumbnail: require('./assets/images/product-orange-juice.png'), quantity:'2L, Price'},
    { id:5, title:'Coca Cola Can', price: '$4.98', thumbnail: require('./assets/images/product-coca-can.png'), quantity:'325ml, Price'},
    { id:6, title:'Pepsi Can', price: '$4.98', thumbnail: require('./assets/images/product-pepsi-can.png'), quantity:'330ml, Price'},
]