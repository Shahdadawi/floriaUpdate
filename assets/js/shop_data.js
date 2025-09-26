const categories = [
    { name: "Bespoke", count: 7 },
    { name: "Birthday", count: 13 },
    { name: "Next Day", count: 7 },
    { name: "Plant", count: 5 },
    { name: "Wedding", count: 5 }
];

const colors = [
    { name: "Black", code: "#000000", count: 2 },
    { name: "Blue", code: "#4e6fae", count: 3 },
    { name: "Green", code: "#26b3a0", count: 6 },
    { name: "Pink", code: "#ffc0cb", count: 3 },
    { name: "Red", code: "#f44336", count: 3 },
    { name: "Yellow", code: "#d4a017", count: 4 }
];

const sizes = ["M", "S", "X", "XL"];

const prices = [
    { label: "Under $20", min: 0, max: 20 },
    { label: "$20 - $50", min: 20, max: 50 },
    { label: "Above $50", min: 50, max: 1000 }
];
const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest"];

const products = [
    {
        name: "Lovely Bunch",
        price: 110,
        image: "assets/img/products/p1.jpg",
        gallery: [
            "assets/img/products/p1.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
    {
        name: "Elegant Flower",
        price: 95,
        image: "assets/img/products/p2.jpg",
        gallery: [
            "assets/img/products/p2.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 5,
        colors: ["#ffa500", "#ff0000"]
    },
    {
        name: "Sunset Rose",
        price: 140,
        image: "assets/img/products/p3.jpg",
        gallery: [
            "assets/img/products/p3.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 5,
        colors: ["#ff69b4"]
    },
    {
        name: "Tulip Joy",
        price: 80,
        image: "assets/img/products/p4.jpg",
        gallery: [
            "assets/img/products/p4.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 3,
        colors: ["#ffc0cb", "#00bfff"]
    },

    {
        name: "Lovely Bunch",
        price: 120,
        image: "assets/img/products/p13.jpg",
        gallery: [
            "assets/img/products/p13.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
    {
        name: "Elegant Flower",
        price: 90,
        image: "assets/img/products/p6.jpg",
        gallery: [
            "assets/img/products/p6.jpg",
            "assets/img/gallery/p55.jpg"
            
          ],
        rating: 5,
        colors: ["#ffa500", "#ff0000"]
    },
    {
        name: "Sunset Rose",
        price: 130,
        image: "assets/img/products/p7.jpg",
        gallery: [
            "assets/img/products/p7.jpg",
            "assets/img/gallery/p99.jpg"
            
          ],
        rating: 5,
        colors: ["#ff69b4"]
    },
    {
        name: "Tulip Joy",
        price: 70,
        image: "assets/img/products/p1.jpg",
        gallery: [
            "assets/img/products/p1.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 3,
        colors: ["#ffc0cb", "#00bfff"]
    },

    {
        name: "Lovely Bunch",
        price: 110,
        image: "assets/img/products/p9.jpg",
        gallery: [
            "assets/img/products/p9.jpg",
            "assets/img/gallery/p55.jpg"
            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
    {
        name: "Elegant Flower",
        price: 95,
        image: "assets/img/products/p10.jpg",
        gallery: [
            "assets/img/products/p10.jpg",
            "assets/img/gallery/p55.jpg"
            
          ],
        rating: 5,
        colors: ["#ffa500", "#ff0000"]
    },
    {
        name: "Sunset Rose",
        price: 145,
        image: "assets/img/products/p11.jpg",
        gallery: [
            "assets/img/products/p11.jpg",
            "assets/img/gallery/p77.jpg"
            
          ],
        rating: 5,
        colors: ["#ff69b4"]
    },
    {
        name: "Tulip Joy",
        price: 50,
        image: "assets/img/products/p12.jpg",
        gallery: [
            "assets/img/products/p12.jpg",
            "assets/img/gallery/pi.jpg"
            
          ],
        rating: 3,
        colors: ["#ffc0cb", "#00bfff"]
    },

    {
        name: "Lovely Bunch",
        price: 220,
        image: "assets/img/products/p13.jpg",
        gallery: [
            "assets/img/products/p13.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
    {
        name: "Elegant Flower",
        price: 98,
        image: "assets/img/products/p2.jpg",
        gallery: [
            "assets/img/products/p2.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 5,
        colors: ["#ffa500", "#ff0000"]
    },
    {
        name: "Sunset Rose",
        price: 190,
        image: "assets/img/products/p3.jpg",
        gallery: [
            "assets/img/products/p3.jpg",
            "assets/img/gallery/po.jpg"
            
          ],
        rating: 5,
        colors: ["#ff69b4"]
    },
    {
        name: "Tulip Joy",
        price: 70,
        image: "assets/img/products/p4.jpg",
        gallery: [
            "assets/img/products/p4.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 3,
        colors: ["#ffc0cb", "#00bfff"]
    },
    {
        name: "Lovely Bunch",
        price: 160,
        image: "assets/img/products/p1.jpg",
        gallery: [
            "assets/img/products/p1.jpg",
            "assets/img/gallery/pi.jpg"
            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
    {
        name: "Elegant Flower",
        price: 85,
        image: "assets/img/products/p6.jpg",
        gallery: [
            "assets/img/products/p6.jpg",
            "assets/img/gallery/p77.jpg"
            
          ],
        rating: 5,
        colors: ["#ffa500", "#ff0000"]
    },
    {
        name: "Sunset Rose",
        price: 130,
        image: "assets/img/products/p7.jpg",
        gallery: [
            "assets/img/products/p7.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 5,
        colors: ["#ff69b4"]
    },
    {
        name: "Tulip Joy",
        price: 85,
        image: "assets/img/products/p.jpg",
        gallery: [
            "assets/img/products/p.jpg",
            "assets/img/gallery/p66.jpg"
            
          ],
        rating: 3,
        colors: ["#ffc0cb", "#00bfff"]
    },

    {
        name: "Lovely Bunch",
        price: 125,
        image: "assets/img/products/p9.jpg",
        gallery: [
            "assets/img/products/p9.jpg",
            "assets/img/gallery/p99.jpg"
            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
    {
        name: "Elegant Flower",
        price: 85,
        image: "assets/img/products/p10.jpg",
        gallery: [
            "assets/img/products/p10.jpg",
            "assets/img/gallery/p44.jpg"
            
          ],
        rating: 5,
        colors: ["#ffa500", "#ff0000"]
    },
    {
        name: "Sunset Rose",
        price: 148,
        image: "assets/img/products/p11.jpg",
        gallery: [
            "assets/img/products/p11.jpg",
            "assets/img/gallery/p66.jpg"
            
          ],
        rating: 5,
        colors: ["#ff69b4"]
    },
    {
        name: "Tulip Joy",
        price: 86,
        image: "assets/img/products/p12.jpg",
        gallery: [
            "assets/img/products/p12.jpg",
            "assets/img/gallery/p88.jpg"
            
          ],
        rating: 3,
        colors: ["#ffc0cb", "#00bfff"]
    },

    {
        name: "Lovely Bunch",
        price: 125,
        image: "assets/img/products/p13.jpg",
        gallery: [
            "assets/img/products/p13.jpg",
            "assets/img/gallery/p44.jpg",
            "assets/img/gallery/p99.jpg"

            
          ],
        rating: 4,
        colors: ["#ff69b4", "#ffff00"]
    },
];

