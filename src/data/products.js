import blueair from '../assets/blueair.jpg';
import bluepack from '../assets/bluepack.jpg';
import blueph from '../assets/blueph.jpg';
import greenair from '../assets/greenair.jpg';
import greenph from '../assets/greenph.jpg';
import orangeair from '../assets/orangeair.jpg';
import orangepack from '../assets/orangepack.jpg';
import orangeph from '../assets/orangeph.jpg';
import redair from '../assets/redair.jpg';
import yellowph from '../assets/yellowph.jpg';
import purpleair from '../assets/purpleair.jpg';
import redph from '../assets/redph.jpg';



export const products = [
  // PHONE CASES
  {
    id: 101,
    category: 'phone',
    title:'Blue Case',
    subtitle:"iPhone\n 11 (Regular/Pro/Pro Max)\n12 (Regular/Pro/Pro Max)\n13 (Regular/Pro/Pro Max)\n14 (Regular/Pro/Pro Max)\n15 (Regular/Pro/Pro Max)\n16 (Regular/Pro/Pro Max)",
    tag:'Rugged',
    price:10.99,
    
    rating:4.9,
    img:blueph,
    variants:[
      { key:'blue',  label:'Blue',  colorHex:'#0d49e0ff' },
      
    ]
  },
  {
    id: 102,
    category: 'phone',
    title:'Green Case',
    subtitle: "iPhone\n 11 (Regular/Pro/Pro Max)\n12 (Regular/Pro/Pro Max)\n13 (Regular/Pro/Pro Max)\n14 (Regular/Pro/Pro Max)\n15 (Regular/Pro/Pro Max)\n16 (Regular/Pro/Pro Max)",
    tag:'clear',
    price:10.99,
    rating:4.7,
    img: greenph,
    variants:[
      { key:'green', label:'green', colorHex:'#10d23aff' },
     
    ]
  },
  {
    id: 103,
    category: 'phone',
    title:'Orange Case',
    subtitle:"iPhone\n 11 (Pro Max)\n12 (Regular/Pro/Pro Max)\n13 (Regular/Pro/Pro Max)\n14 (Regular/Pro/Pro Max)\n15 (Regular/Pro/Pro Max)\n16 (Pro/Pro Max)",
    tag:'rugged',
    price:10.99,
   
    rating:4.8,
    img:orangeph,
    variants:[
     
      { key:'orange', label:'Orange', colorHex:'#f97316' }
    ]
  },
    {
    id: 104,
    category: 'phone',
    title:'Yellow Case',
    subtitle:"iPhone\n 11 (Pro/Pro Max)\n12 (Regular/Pro/Pro Max)\n13 (Regular/Pro/Pro Max)\n14 (Regular/Pro/Pro Max)\n15 (Regular/Pro/Pro Max)\n16 (Regular/Pro/Pro Max)",
    tag:'Rugged',
    price:10.99,
    
    rating:4.9,
    img:yellowph,
    variants:[
      { key:'yellow',  label:'yellow',  colorHex:'#e0e00dff' },
      
    ]
  },
     {
    id: 105,
    category: 'phone',
    title:'Red Case',
    subtitle:"iPhone\n 11 (Regular/Pro/Pro Max)\n12 (Regular/Pro/Pro Max)\n13 (Regular/Pro/Pro Max)\n14 (Regular/Pro/Pro Max)\n15 (Regular/Pro/Pro Max)\n16 (Regular/Pro/Pro Max)",
    tag:'Rugged',
    price:10.99,
    
    rating:4.9,
    img:redph,
    variants:[
      { key:'red',  label:'red',  colorHex:'#d21023ff' },
      
    ]
  },

  // AIRPODS CASES
  {
    id: 201,
    category: 'airpods',
    title:'Blue Case',
    subtitle:'AirPods Pro 1/2 - (2nd Gen)/(3rd Gen)',
    tag:'magsafe',
    price:8.99,
    rating:4.6,
    img:blueair,
    variants:[
     { key:'blue',  label:'Blue',  colorHex:'#0d49e0ff' },
      
    ]
  },
  {
    id: 202,
    category: 'airpods',
    title:'Green Case',
    subtitle:'AirPods Pro 1/2 - (2nd Gen)',
    tag:'clear',
    price:8.99,
    rating:4.5,
    img:greenair,
    variants:[
        { key:'green', label:'green', colorHex:'#10d23aff' },
        
    ]
  },
  {
    id: 203,
    category: 'airpods',
    title:'Orange Case',
    subtitle:'AirPods Pro 1/2 - (2nd Gen)/(3rd Gen)',
    tag:'rugged',
    price:8.99,
    rating:4.7,
    img:orangeair,
    variants:[
       { key:'orange', label:'Orange', colorHex:'#f97316' }
    ]
  },
   {
    id: 204,
    category: 'airpods',
    title:'Red Case',
    subtitle:'AirPods Pro 1/2 - (2nd Gen)/(3rd Gen)',
    tag:'clear',
    price:8.99,
    rating:4.5,
    img:redair,
    variants:[
        { key:'red', label:'red', colorHex:'#d21023ff' },
    ]
  },
  
    {
    id: 205,
    category: 'airpods',
    title:' Purple Case',
    subtitle:'AirPods Pro 1/2 - (2nd Gen)/(3rd Gen)',
    tag:'rugged',
    price:8.99,
    rating:4.7,
    img:purpleair,
    variants:[
         { key:'purple', label:'purple', colorHex:'#9b10d2ff' },
    ]
  },
];
// Notes:
// - category: 'phone' or 'airpods'
// - variants: each has key/label/colorHex and optional priceDelta/img override.

// TIP: replace these imports with your local assets if desired
// import magsafe1 from "../assets/magsafe-1.jpg";
// import clear1 from "../assets/clear-1.jpg";
// import rugged1 from "../assets/rugged-1.jpg";
// export const products = [
//   {id:1, title:'UltraGrip MagSafe Case', subtitle:'iPhone 15/16', tag:'magsafe', price:39, compareAt:49, rating:4.9, img:'https://images.unsplash.com/photo-1604176354204-9268737828d2?q=80&w=1200&auto=format&fit=crop'},
//   {id:2, title:'Crystal Clear Slim', subtitle:'iPhone 14/15/16', tag:'clear', price:29, compareAt:0, rating:4.7, img:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop'},
//   {id:3, title:'Ridge Rugged', subtitle:'Galaxy S24', tag:'rugged', price:44, compareAt:59, rating:4.8, img:'https://images.unsplash.com/photo-1583947581924-860bda6a26f6?q=80&w=1200&auto=format&fit=crop'},
//   {id:4, title:'Folio MagSafe Wallet', subtitle:'Universal', tag:'magsafe', price:34, compareAt:0, rating:4.5, img:'https://images.unsplash.com/photo-1601597111158-2fceff8829e8?q=80&w=1200&auto=format&fit=crop'},
//   {id:5, title:'Frost Clear Bumper', subtitle:'iPhone 13/14', tag:'clear', price:24, compareAt:0, rating:4.6, img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'},
//   {id:6, title:'Impact Armor Gen‑2', subtitle:'Pixel 9', tag:'rugged', price:42, compareAt:0, rating:4.9, img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1200&auto=format&fit=crop'},
//   // Added more SKUs so each collection shows multiple options
//   {id:7, title:'Slim Clear Guard', subtitle:'iPhone 16 Pro', tag:'clear', price:27, compareAt:0, rating:4.6, img:'https://images.unsplash.com/photo-1609951652134-bfd2a83760a7?q=80&w=1200&auto=format&fit=crop'},
//   {id:8, title:'Trail Rugged Max', subtitle:'Galaxy S24 Ultra', tag:'rugged', price:49, compareAt:59, rating:4.7, img:'https://images.unsplash.com/photo-1522591640190-8744a0aa2cc0?q=80&w=1200&auto=format&fit=crop'},
//   {id:9, title:'MagSafe Grip Lite', subtitle:'iPhone 15', tag:'magsafe', price:33, compareAt:0, rating:4.5, img:'https://images.unsplash.com/photo-1605003179269-5f3bf33be4f5?q=80&w=1200&auto=format&fit=crop'}
// ];