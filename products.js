// Save all products to sessionStorage for viewing in other files
function saveProductsToSession() {
    sessionStorage.setItem('allProducts', JSON.stringify(products));
}

// Call this function when you want to make products available in sessionStorage
//  saveProductsToSession();
// Product list array

const products = [
    // Each product will be recognized by its id and can be added to cart via script.js
    {
        id: 1,
        category: "Footwear",
        name: "Foot Socks",
        price: 13.00,
        images: [
            "images/st1.jpg",
            "images/st2.jpg",
            "images/st3.jpg",
            "images/st4.jpg"
        ],
        sizes: ["XXL", "XL", "Large", "Medium", "Small"],
        defaultQuantity: 1
    },
    
    {
        id: 2,
        category: "Top Hoodies",
        name: "Classic Hoodies",
        price: 8.00,
        images: [
            "images/hud1.jpg",
            "images/hud2.jpg",
            "images/hud3.jpg",
            "images/hud4.jpg",
              
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 3,
        category: "Top Head",
        name: "Classic Slipers",
        price: 8.00,
        images: [
            "images/sli1.jpeg",
            "images/sli2.jpeg",
            "images/sli3.jpeg",
            "images/sli4.jpeg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 4,
        category: "Mixed clothes ",
        name: "Classic capes",
        price: 8.50,
        images: [
            "images/z1.jpg",
            "images/z2.jpg",
            "images/z3.jpg",
            "images/z4.jpg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 5,
        category: "Top Head",
        name: "Levi accesories",
        price: 10.50,
        images: [
            "images/x1.jpg",
            "images/x2.jpg",
            "images/x3.jpg",
            "images/x4.jpg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 6,
        category: "Top Pants",
        name: "Classic Pants",
        price: 12.50,
        images: [
            "images/tr1.jpeg",
            "images/tr2.jpeg",
            "images/tr3.jpeg",
            "images/tr4.jpeg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 7,
        category: "Top character t-shirts",
        name: "Goku T-shirt",
        price: 15.50,
        images: [
            "images/T1.jpg",
            "images/T2.jpg",
            "images/T3.jpg",
            "images/T4.jpg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 8,
        category: "Top fluffy",
        name: "Classic fluffy Hats",
        price: 8.50,
        images: [
            "images/cowby1.jpg",
            "images/cowby2.jpg",
            "images/cowby3.jpg",
            "images/cowby4.jpg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 9,
        category: "Top Head",
        name: " multi colored prints",
        price: 8.50,
        images: [
            "images/color1.jpg",
            "images/color2.jpg",
            "images/color3.jpg",
            "images/color4.jpg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 10,
        category: "Top Head",
        name: "Levi capes",
        price: 8.50,
        images: [
            "images/capblak1.jpg",
            "images/capblak2.jpg",
            "images/capblak3.jpg",
            "images/capblak4.jpg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 11,
        category: "Top Head",
        name: "Levi capes",
        price: 8.50,
        images: [
            "images/capblak1.jpg",
            "images/capblak2.jpg",
            "images/capblak3.jpg",
            "images/capblak4.jpg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 12,
        category: "Top Head",
        name: "Levi capes",
        price: 8.50,
        images: [
            "images/capblak1.jpg",
            "images/capblak2.jpg",
            "images/capblak3.jpg",
            "images/capblak4.jpg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey T-shirt",
        price: 78.00,
        images: [
            "image2/mkd pro-1.jpg",
            "image2/mkd pro-2.jpg",
            "image2/mkd pro-3.jpg",
            "image2/mkd pro-4.jpg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey d T-shirt2",
        price: 78.00,
        images: [
            "image2/mkd pro-2.jpg",
            "image2/mkd pro-3.jpg",
            "image2/mkd pro-4.jpg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes3",
        name: "Monkey T-shirt3",
        price: 78.00,
        images: [
            "image2/mkd pro-3.jpg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey T-shirt4",
        price: 78.00,
        images: [
           
            "image2/mkd pro-4.jpg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey T-shirt5",
        price: 78.00,
        images: [
            "image2/mkd pro-5.jpg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey T-shirt6",
        price: 78.00,
        images: [
            "image2/mkd pro-6.jpg",
           
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey T-shirt7",
        price: 78.00,
        images: [
            "image2/mkd pro-7.jpg",
           
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 13,
        category: "Clothes",
        name: "Monkey T-shirt8",
        price: 78.00,
        images: [
            "image2/mkd pro-8.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-1",
        price: 78.00,
        images: [
            "image2/ichigo pro-1.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-2",
        price: 78.00,
        images: [
            "image2/ichigo pro-2.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
      {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-3",
        price: 78.00,
        images: [
            "image2/ichigo pro-3.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    
     {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-4",
        price: 78.00,
        images: [
            "image2/ichigo pro-4.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-5",
        price: 78.00,
        images: [
            "image2/ichigo pro-5.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-6",
        price: 78.00,
        images: [
            "image2/ichigo pro-6.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-7",
        price: 78.00,
        images: [
            "image2/ichigo pro-7.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
       {
        id: 14,
        category: "Clothes",
        name: "Ichigo T-shirt-8",
        price: 78.00,
        images: [
            "image2/ichigo pro-8.jpg",
          
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

    
     {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt",
        price: 8.50,
        images: [
            "image2/pro-1.jpg",
            "image2/pro-2.jpg",
            "image2/pro-3.jpg",
            "image2/pro-4.jpg",
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (2)",
        price: 8.50,
        images: [
         
            "image2/pro-2.jpg",
            "image2/pro-3.jpg",
            "image2/pro-4.jpg",
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (3)",
        price: 8.50,
        images: [
           
            "image2/pro-3.jpg",
            "image2/pro-4.jpg",
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (4)",
        price: 8.50,
        images: [
           
            "image2/pro-4.jpg",
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (5)",
        price: 8.50,
        images: [
           
            "image2/pro-5.jpg",
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (6)",
        price: 8.50,
        images: [
            "image2/pro-6.jpg",
           
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (7)",
        price: 8.50,
        images: [
            "image2/pro-7.jpg",
           
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 15,
        category: "Clothes",
        name: "Gojo Saturo T-shirt (8)",
        price: 8.50,
        images: [
            "image2/pro-8.jpg",
          
        
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman T-shirt",
        price: 8.50,
        images: [
            "image2/levy pro-1.jpg",
            "image2/levy pro-2.jpg",
            "image2/levy pro-3.jpg",
            "image2/levy pro-4.jpg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman Two",
        price: 8.50,
        images: [
            "image2/levy pro-2.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
    {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman Three",
        price: 8.50,
        images: [
            "image2/levy pro-3.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman four",
        price: 8.50,
        images: [
            "image2/levy pro-4.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman five",
        price: 8.50,
        images: [
            "image2/levy pro-5.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman six",
        price: 8.50,
        images: [
            "image2/levy pro-6.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman seven",
        price: 8.50,
        images: [
            "image2/levy pro-7.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 16,
        category: "Clothes",
        name: "Levy Ackerman eight",
        price: 8.50,
        images: [
            "image2/levy pro-8.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
      {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-1",
        price: 8.50,
        images: [
            "image2/obito pro-1.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-2",
        price: 8.50,
        images: [
            "image2/obito pro-2.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-3",
        price: 8.50,
        images: [
            "image2/obito pro-3.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-4",
        price: 8.50,
        images: [
            "image2/obito pro-4.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-5",
        price: 8.50,
        images: [
            "image2/obito pro-5.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-6",
        price: 8.50,
        images: [
            "image2/obito pro-6.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-7",
        price: 8.50,
        images: [
            "image2/obito pro-7.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
   
     {
        id: 17,
        category: "Clothes",
        name: "Obito T-shirt-8",
        price: 8.50,
        images: [
            "image2/obito pro-8.jpg",
           
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-1",
        price: 8.50,
        images: [
            "image2/kenaki pro-1.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-2",
        price: 8.50,
        images: [
            "image2/kenaki pro-2.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-3",
        price: 8.50,
        images: [
            "image2/kenaki pro-3.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-4",
        price: 8.50,
        images: [
            "image2/kenaki pro-4.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-5",
        price: 8.50,
        images: [
            "image2/kenaki pro-5.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-6",
        price: 8.50,
        images: [
            "image2/kenaki pro-6.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-7",
        price: 8.50,
        images: [
            "image2/kenaki pro-7.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },

     {
        id: 18,
        category: "Clothes",
        name: "kenaki T-shirt-8",
        price: 8.50,
        images: [
            "image2/kenaki pro-8.jpg",

        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },











    
    
   
    
     {
        id: 19,
        category: "Top Head",
        name: "Levi capes",
        price: 8.50,
        images: [
            "images/capblak1.jpg",
            "images/capblak2.jpg",
            "images/capblak3.jpg",
            "images/capblak4.jpg"
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 20,
        category: "Top ",
        name: "Back bag",
        price: 78.00,
        images: [
            "images/ba1.jpeg",
            "images/ba2.jpeg",
            "images/ba3.jpeg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 21,
        category: "Top Head",
        name: "Chopper Fluff",
        price: 8.50,
        images: [
            "images/cowby1.jpg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 22,
        category: "Top Head",
        name: "Long Pants",
        price: 78.00,
        images: [
            "images/tr3.jpeg",
            "images/tr1.jpeg",
            "images/tr2.jpeg",
            "images/tr4.jpeg",
            
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 23,
        category: "Clothes",
        name: "Kenaki T-shirt",
        price: 8.50,
        images: [
            "image2/kenaki pro-1.jpg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
     {
        id: 24,
        category: "Clothes",
        name: "Head socks",
        price: 8.50,
        images: [
            "images/g4.jpeg",
           
        ],
        sizes: ["S", "M", "L"],
        defaultQuantity: 1
    },
];

