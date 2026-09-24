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
                image: 'desert6.jpg',
                name: 'Tiramisu',
                description: 'Tiramisu is a silky and creamy dessert that brings a touch of elegance to every occasion.',
                size: '8″ bowl',
                serves: 'serves 6-8',
                rating: 4,
                packs: {
                    'Small Bowl': { price: 900 },
                    'Large Bowl': { price: 1600 }
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
    //  BISCUITS & BREADS section — holds snack/bread-type items
    // ============================================================
    biscuits: {
        icon: 'fa-cookie',
        label: 'Biscuits & Breads',
        items: [
            {
                image: 'snack1.jpg',
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
                image: 'snack2.jpg',
                name: 'Butter Cookies',
                description: 'Premium Butter Cookies – Rich, Crispy & Melt-In-Mouth',
                size: '4″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '6 pcs': { price: 500 },
                    '12 pcs': { price: 950 }
                }
            },
            {
                image: 'snack3.jpg',
                name: 'Morsels',
                description: 'Our signature butter coin biscuits, Pale golden, crisp, melt-in-mouth & impossible to stop at one.',
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
                image: 'snack4.jpg',
                name: 'Macaron',
                description: 'A taste of Italy in Lahore',
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
                image: 'snack5.jpg',
                name: 'Badam Khatai',
                description: 'A Premium Badam Khatai, Golden, Buttery & Almond-Rich Delight.',
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
                image: 'snack6.jpg',
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
                image: 'snack7.jpg',
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
                image: 'snack8.jpg',
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
                image: 'snack9.jpg',
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
                image: 'snack10.jpg',
                name: 'Garlic Bread',
                description: 'Freshly baked bread topped with garlic butter and herbs. Crispy on the outside, soft on the inside.',
                size: '6″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '4 pcs': { price: 350 },
                    '8 pcs': { price: 650 }
                }
            },
            {
                image: 'snack11.jpg',
                name: 'Raspberry Cake',
                description: 'Soft, fluffy sponge layered with fresh raspberry filling and topped with creamy frosting. A fruity, tangy delight in every bite.',
                size: '6″',
                serves: 'serves 4-6',
                rating: 5,
                packs: {
                    'Slice': { price: 400 },
                    'Half (6″)': { price: 1400 },
                    'Whole (8″)': { price: 2600 }
                }
            }
        ]
    },

    // ============================================================
    //  SNACKS section — holds biscuit-type items
    // ============================================================
    snacks: {
        icon: 'fa-utensils',
        label: 'Snacks',
        items: [
            {
                image: 'biscuit1.jpg',
                name: 'Badami Naan Khataai',
                description: 'Traditional Pakistani biscuit made with almond flour and ghee, creating a crumbly, melt-in-mouth texture. Perfect with a cup of chai, this signature treat is a customer favourite.',
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
                image: 'biscuit2.jpg',
                name: 'Butter Cookies',
                description: 'Classic butter cookies with a melt-in-mouth texture. Light, crisp, and perfectly buttery — a timeless treat for all ages.',
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
                image: 'biscuit3.jpg',
                name: 'Chocolate Chip Cookies',
                description: 'Loaded with rich chocolate chips, these cookies are crispy on the edges and chewy in the center. A perfect treat with your afternoon tea.',
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
                image: 'biscuit4.jpg',
                name: 'Coconut Macaroons',
                description: 'Chewy coconut macaroons with a crisp exterior and soft, moist interior. Dipped in dark chocolate for extra richness.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Box of 6': { price: 500 },
                    'Box of 12': { price: 950 }
                }
            },
            {
                image: 'biscuit5.jpg',
                name: 'Oatmeal Raisin Cookies',
                description: 'Hearty oatmeal cookies with plump raisins and a hint of cinnamon. Soft, chewy, and full of wholesome flavor.',
                size: '2.5″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Box of 6': { price: 480 },
                    'Box of 12': { price: 900 }
                }
            }
        ]
    }
};