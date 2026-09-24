// ================================================================
//  📦 PRODUCT DATA — Noshup Foods
//
//  ⚡ HOW TO USE:
//  1. Add/remove a category → add/remove a top-level block
//  2. Add/remove an item → add/remove an object inside `items: []`
//  3. Category order on the page = order in this file.
//  4. If a category has 0 items, it is completely hidden.
//
//  Each product:
//    image       -> filename inside /images folder
//    name        -> display name
//    description -> full description
//    size        -> e.g. "6″" or "2″ round"
//    serves      -> e.g. "serves 4-6"
//    rating      -> 1 to 5
//    packs       -> { "Pack Name": { price: 123 }, ... }
//
//  Testimonials: edit the `testimonials` array at the bottom of this file.
// ================================================================

const productData = {
    deserts: {
        icon: 'fa-ice-cream',
        label: 'Cakes & Sundaes',
        items: [
            {
                image: 'desert1.jpg',
                name: 'Baked Cheese Cake',
                description: 'Velvety cream cheese. Crunchy biscuit base. Topped with love. Not too sweet, just right.',
                size: '6″',
                serves: 'serves 4-6',
                rating: 5,
                packs: {
                    'Small (4 pcs)': { price: 850 },
                    'Medium (6 pcs)': { price: 1200 },
                    'Large (9 pcs)': { price: 1750 }
                }
            },
            {
                image: 'desert2.jpg',
                name: 'Rich Nutella Fudge Cake',
                description: 'Dense chocolate fudge cake loaded with Nutella. Gooey, rich, and melt-in-mouth. For real chocolate lovers.',
                size: '7″',
                serves: 'serves 6-8',
                rating: 5,
                packs: {
                    'Slice': { price: 450 },
                    'Half (6″)': { price: 1500 },
                    'Whole (7″)': { price: 2800 }
                }
            },
            {
                image: 'desert3.jpg',
                name: 'Red Velvet Cake',
                description: 'Classic red velvet layers filled with smooth cream cheese. Luxuriously soft, subtly cocoa, and made to melt.',
                size: '7″',
                serves: 'serves 6-8',
                rating: 5,
                packs: {
                    'Slice': { price: 450 },
                    'Half (6″)': { price: 1500 },
                    'Whole (7″)': { price: 2800 }
                }
            },
            {
                image: 'desert4.jpg',
                name: 'Lemon Tart',
                description: 'Bright lemon tart. No preservatives. Just real citrus goodness.',
                size: '4″',
                serves: 'serves 1-2',
                rating: 4,
                packs: {
                    'Single': { price: 400 },
                    'Twin Pack': { price: 750 }
                }
            },
            {
                image: 'desert5.jpg',
                name: 'Tiramisu',
                description: 'Tiramisu is a silky and creamy dessert that brings a touch of elegance to every occasion.',
                size: '4″',
                serves: 'serves 1-2',
                rating: 5,
                packs: {
                    'Single': { price: 550 },
                    'Box of 4': { price: 2000 }
                }
            },
            {
                image: 'desert7.jpg',
                name: 'Loaded Chocolate Muffin',
                description: 'Chocolate muffins are rich, tender, and fluffy baked treats featuring a deep cocoa flavor with loaded chocolate.',
                size: '2.5″',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    'Box of 4': { price: 800 },
                    'Box of 6': { price: 1150 },
                    'Box of 12': { price: 2200 }
                }
            },
            {
                image: 'desert8.jpg',
                name: 'Red Velvet Muffin',
                description: 'Red velvet muffin: Soft, moist, vibrant red crumb with a hint of cocoa.',
                size: '2.5″',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Single': { price: 350 },
                    'Box of 4': { price: 1300 }
                }
            },
            {
                image: 'desert9.jpg',
                name: 'Three Milk Cake',
                description: 'Soaked in milk. Drowned in cream. Light, fluffy, and not too sweet. The comfort dessert you\'ll crave.',
                size: '3″ cup',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    'Single Cup': { price: 300 },
                    'Pack of 4': { price: 1100 },
                    'Pack of 6': { price: 1600 }
                }
            }
        ]
    },

    // ============================================================
    //  BISCUITS & BREADS section
    //  Image names: b1.jpg → b10.jpg
    // ============================================================
    biscuits: {
        icon: 'fa-cookie',
        label: 'Biscuits & Breads',
        items: [
            {
                image: 'b1.jpg',
                name: 'Meringue Biscuits',
                description: 'Light, airy, sweet little clouds that melt the moment you bite.',
                size: '3″',
                serves: 'serves 1-2',
                rating: 4,
                packs: {
                    'Pack of 4': { price: 400 },
                    'Pack of 8': { price: 750 },
                    'Pack of 12': { price: 1100 }
                }
            },
            {
                image: 'b2.jpg',
                name: 'Butter Cookies',
                description: 'Premium Butter Cookies – Rich, Crispy & Melt-In-Mouth.',
                size: '4″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '6 pcs': { price: 500 },
                    '12 pcs': { price: 950 }
                }
            },
            {
                image: 'b3.jpg',
                name: 'Morsels',
                description: 'Our signature butter coin biscuits. Pale golden, crisp, melt-in-mouth & impossible to stop at one.',
                size: '3″',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    'Box of 4': { price: 600 },
                    'Box of 8': { price: 1100 },
                    'Box of 12': { price: 1600 }
                }
            },
            {
                image: 'b4.jpg',
                name: 'Macaron',
                description: 'A taste of Italy in Lahore.',
                size: '3″',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    '4 pcs': { price: 300 },
                    '8 pcs': { price: 550 },
                    '12 pcs': { price: 800 }
                }
            },
            {
                image: 'b5.jpg',
                name: 'Badam Khatai',
                description: 'A premium Badam Khatai, Golden, Buttery & Almond-Rich Delight.',
                size: '4″',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    '2 pcs': { price: 350 },
                    '4 pcs': { price: 650 },
                    '6 pcs': { price: 950 }
                }
            },
            {
                image: 'b6.jpg',
                name: 'Butter Cake Rusk',
                description: 'Golden, buttery, double-baked for extra crunch. Light, crispy, melts with chai.',
                size: '4″',
                serves: 'serves 1-2',
                rating: 4,
                packs: {
                    '4 pcs': { price: 300 },
                    '8 pcs': { price: 550 }
                }
            },
            {
                image: 'b7.jpg',
                name: 'Sourdough Bread',
                description: 'Slow-fermented, crusty outside, cloud-soft inside with an open airy crumb. The classic artisan loaf.',
                size: '6″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '4 pcs': { price: 350 },
                    '8 pcs': { price: 650 }
                }
            },
            {
                image: 'b8.jpg',
                name: 'Burger Bun',
                description: 'Soft, fresh, and delicious burger buns with a light, fluffy texture—perfect for juicy burgers, sandwiches, and homemade meals.',
                size: '2″',
                serves: 'serves 1-2',
                rating: 5,
                packs: {
                    '6 pcs': { price: 400 },
                    '12 pcs': { price: 750 }
                }
            },
            {
                image: 'b9.jpg',
                name: 'Fucasia Bread',
                description: 'Golden, olive oil-rich and pillowy, topped with fresh rosemary and flaked sea salt. Simple, fragrant, irresistible.',
                size: 'Regular',
                serves: 'serves 1-2',
                rating: 5,
                packs: {
                    'Small': { price: 250 },
                    'Medium': { price: 350 },
                    'Large': { price: 450 }
                }
            },
            {
                image: 'b10.jpg',
                name: 'Chip Cookies',
                description: 'Artisan Choco Chunk – Decadent. Gooey. Irresistible.',
                size: '6″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '4 pcs': { price: 350 },
                    '8 pcs': { price: 650 }
                }
            }
        ]
    },

    // ============================================================
    //  SNACKS section
    //  Image names: s1.jpg → s6.jpg
    // ============================================================
    snacks: {
        icon: 'fa-utensils',
        label: 'Snacks',
        items: [
            {
                image: 's1.jpg',
                name: 'Puff Pastry Twister',
                description: 'Golden, puffed spiral with a crisp, crunchy shell.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    '250g': { price: 350 },
                    '500g': { price: 650 },
                    '1kg': { price: 1200 }
                }
            },
            {
                image: 's2.jpg',
                name: 'Donuts',
                description: 'Donuts are typically ring-shaped or filled, known for their sweet glaze, diverse toppings, and soft, airy texture.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    '250g': { price: 300 },
                    '500g': { price: 550 },
                    '1kg': { price: 1000 }
                }
            },
            {
                image: 's3.jpg',
                name: 'Brownie',
                description: 'A dense, fudgy center and a distinctively thin, crinkly top crust.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    'Box of 6': { price: 450 },
                    'Box of 12': { price: 850 },
                    'Box of 24': { price: 1600 }
                }
            },
            {
                image: 's4.jpg',
                name: 'Croissant',
                description: 'Croissant is a famous, crescent-shaped French pastry known for its golden, flaky crust and soft, buttery inside.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Box of 6': { price: 500 },
                    'Box of 12': { price: 950 }
                }
            },
            {
                image: 's5.jpg',
                name: 'Cinnamon Rolls',
                description: 'Soft swirled dough with cinnamon-sugar filling, topped with vanilla glaze. Warm, buttery, and gooey.',
                size: '2.5″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Box of 6': { price: 480 },
                    'Box of 12': { price: 900 }
                }
            },
            {
                image: 's6.jpg',
                name: 'Plain Tea Cake',
                description: 'Soft, buttery & golden. Baked fresh daily with premium butter. Pure vanilla crumb — perfect with Tea. Light. Fluffy. Melt-in-mouth.',
                size: '4″',
                serves: 'serves 1-2',
                rating: 5,
                packs: {
                    'Single': { price: 100 },
                    'Pack of 4': { price: 380 },
                    'Pack of 6': { price: 550 }
                }
            }
        ]
    }
};

// ================================================================
//  💬 TESTIMONIALS
// ================================================================
const testimonials = [
    {
        name: 'Ayesha Khan',
        location: 'Lahore',
        rating: 5,
        text: 'The Badami Naan Khataai is exactly like the ones we used to get in old Lahore bakeries. Melt-in-mouth perfection with my evening chai!'
    },
    {
        name: 'Muhammad Bilal',
        location: 'Karachi',
        rating: 5,
        text: 'Ordered the Rich Nutella Fudge Cake for my wife\'s birthday. It was insanely good — gooey, rich, and finished in one sitting. Highly recommended.'
    },
    {
        name: 'Fatima Ahmed',
        location: 'Islamabad',
        rating: 5,
        text: 'Their Red Velvet Cake is hands-down the best I\'ve had in Pakistan. Creamy frosting, soft layers — absolutely luxurious.'
    },
    {
        name: 'Hassan Raza',
        location: 'Lahore',
        rating: 5,
        text: 'The Butter Cake Rusk is a game-changer. Perfect crunch, perfect sweetness, and it stays fresh for days. My family\'s favourite now.'
    },
    {
        name: 'Sana Malik',
        location: 'Faisalabad',
        rating: 5,
        text: 'Ordered brownies and cinnamon rolls for a family gathering — everyone kept asking where I got them from. Freshness you can actually taste.'
    },
    {
        name: 'Usman Tariq',
        location: 'Multan',
        rating: 5,
        text: 'Fast delivery, neat packaging, and the Croissants were flaky and buttery. Noshup Foods has definitely earned a regular customer.'
    },
    {
        name: 'Zainab Sheikh',
        location: 'Rawalpindi',
        rating: 5,
        text: 'The Three Milk Cake is dreamy — light, creamy, and not overly sweet. Exactly what I crave after dinner.'
    },
    {
        name: 'Ali Hamza',
        location: 'Lahore',
        rating: 5,
        text: 'Their Sourdough Bread is top-tier. Crusty outside, soft inside — perfect for sandwiches. You can tell it\'s made with real care.'
    },
    {
        name: 'Hira Siddiqui',
        location: 'Karachi',
        rating: 5,
        text: 'Ordered the Chocolate Chip Cookies and Coconut Macaroons — both were gone within an hour. Soft, chewy, and full of flavour.'
    },
    {
        name: 'Ahmed Nawaz',
        location: 'Peshawar',
        rating: 5,
        text: 'Noshup Foods never disappoints. Every order has been fresh, beautifully packed, and absolutely delicious. Truly bakery-level quality.'
    }
];