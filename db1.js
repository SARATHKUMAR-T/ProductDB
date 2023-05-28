// 1.Find all the information about each products

db.cart.find().toArray();

// 2.Find the product price which are between 400 to 800

db.cart.find({ product_price: { $gte: 400, $lte: 800 } });

// 3.Find the product price which are not between 400 to 600

db.cart.find({ product_price: { $not: { $gte: 400, $lte: 600 } } }).toArray();

// 4.List the four product which are grater than 500 in price

db.cart.find({ product_price: { $gte: 500 } }).limit(4);

// 5.Find the product name and product material of each products

db.cart.find().forEach(function (product) {
  print(`Name:${product.product_name},material:${product.product_material}`);
});

// 6.Find the product with a row id of 10

db.cart.find({ id: "10" });

// 7.Find only the product name and product material

db.cart.find().forEach(function (product) {
  print(`Name:${product.product_name},material:${product.product_material}`);
});

// 8.Find all products which contain the value of soft in product material

db.cart.find({ product_material: "Soft" });

// 9.Find products which contain product color indigo  and product price 492.00

db.cart.find({ $and: [{ product_color: "indigo" }, { product_price: 492.0 }] });

// 10.Delete the products which product price value are same

db.cart.distinct("product_price");
