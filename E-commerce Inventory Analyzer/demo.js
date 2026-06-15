// 1. Create products array
let products = [
  { id: 'P001', name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 12 },
  { id: 'P002', name: 'Keyboard', category: 'Electronics', price: 49.99, stock: 3 },
  { id: 'P003', name: 'T-shirt', category: 'Clothing', price: 19.99, stock: 20 },
  { id: 'P004', name: 'Book', category: 'Books', price: 9.99, stock: 0 },
  { id: 'P005', name: 'Headphones', category: 'Electronics', price: 99.99, stock: 5 },
  { id: 'P006', name: 'Jeans', category: 'Clothing', price: 39.99, stock: 2 },
  { id: 'P007', name: 'Notebook', category: 'Books', price: 5.99, stock: 15 },
  { id: 'P008', name: 'Monitor', category: 'Electronics', price: 199.99, stock: 1 }
];



let totalValue = 0;

for (let product of products) {
  totalValue += product.price * product.stock;
}

console.log("Total inventory value:", totalValue);



const categorySummary = {};

for (let product of products) {
  let cat = product.category;

  if (!categorySummary[cat]) {
    categorySummary[cat] = 0;
  }

  categorySummary[cat] += product.price * product.stock;
}

console.log("Category Summary:");
for (let cat in categorySummary) {
  console.log(cat + ":", categorySummary[cat]);
}



const LOW_STOCK = 5;

for (let product of products) {
  product.lowStock = product.stock < LOW_STOCK;
}

console.log("Low stock products:");
for (let product of products) {
  if (product.lowStock) {
    console.log(product.name);
  }
}



for (let product of products) {
  if (product.category === "Electronics") {
    product.price = product.price * 0.9;
  }
}

console.log("Updated Electronics Prices:");
for (let product of products) {
  if (product.category === "Electronics") {
    console.log(product.name, product.price);
  }
}



const available = [];

for (let product of products) {
  if (product.stock > 0) {
    available.push(product);
  }
}

console.log("Available products count:", available.length);
for (let product of available) {
  console.log(product.name);
}



for (let i = products.length - 1; i >= 0; i--) {
  if (products[i].stock === 0 || products[i].price <= 0) {
    products.splice(i, 1);
  }
}

console.log("Products after cleanup:", products.length);



const clone = {
  ...products[0],
  warranty: '1 year'
};

console.log("Original:", products[0]);
console.log("Clone:", clone);