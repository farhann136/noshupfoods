// ================================================================
//  📦 PRODUCT DATA — Noshup Foods
//
//  ⚡ HOW TO USE:
//  1. Add/remove a category → add/remove a top-level block
//     (e.g. deserts, biscuits, snacks, cakes, breads, drinks…)
//  2. Add/remove an item → add/remove an object inside `items: []`
//  3. Number of items per category can be 0, 1, or 100+ — auto-handled.
//  4. Category order on the page = order in this file.
//  5. If a category has 0 items, it is completely hidden (header + grid).
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
//  To add a new category:
//    myNewCategory: {
//        icon: 'fa-cake-candles',   // any Font Awesome icon
//        label: 'Cakes',
//        items: [ { …product… }, { …product… } ]
//    }
// ================================================================

const productData = {
    deserts: {
        icon: 'fa-ice-cream',
        label: 'Deserts',
        items: [
            {
                image: 'desert1.jpeg',
                name: 'Tiramisu',
                description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers, creamy mascarpone, and a dusting of rich cocoa powder. A sophisticated treat for coffee lovers.',
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
                image: 'desert2.jpeg',
                name: 'New York Cheesecake',
                description: 'Ultra-creamy cheesecake with a buttery graham cracker crust, topped with a vibrant berry compote. Rich, smooth, and absolutely irresistible.',
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
                image: 'desert3.jpeg',
                name: 'Fudge Brownie',
                description: 'Gooey chocolate brownie loaded with walnuts and chocolate chunks. The perfect balance of crispy edges and a soft, fudgy centre that melts in your mouth.',
                size: '5″',
                serves: 'serves 4',
                rating: 4,
                packs: {
                    'Box of 4': { price: 700 },
                    'Box of 6': { price: 950 },
                    'Box of 9': { price: 1350 }
                }
            },
            {
                image: 'desert4.jpeg',
                name: 'Panna Cotta',
                description: 'Silky smooth Italian custard infused with vanilla bean, served with a tangy berry compote. Light, elegant, and the perfect ending to any meal.',
                size: '4″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    'Single': { price: 400 },
                    'Twin Pack': { price: 750 }
                }
            }
        ]
    },

    biscuits: {
        icon: 'fa-cookie',
        label: 'Biscuits',
        items: [
            {
                image: 'biscuit1.jpeg',
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
                image: 'biscuit2.jpeg',
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
                image: 'biscuit3.jpeg',
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
            }
        ]
    },

    snacks: {
        icon: 'fa-utensils',
        label: 'Snacks',
        items: [
            {
                image: 'snack1.jpeg',
                name: 'Mini Sandwiches',
                description: 'Assorted mini sandwiches with fresh fillings. Perfect for parties, gatherings, and afternoon tea. Made with freshly baked bread and premium ingredients.',
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
                image: 'snack2.jpeg',
                name: 'Cheese Sticks',
                description: 'Crispy, golden cheese sticks with a gooey center. Served with tangy marinara sauce. A perfect snack for any occasion.',
                size: '4″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '6 pcs': { price: 500 },
                    '12 pcs': { price: 950 }
                }
            },
            {
                image: 'snack3.jpeg',
                name: 'Mini Pizzas',
                description: 'Bite-sized pizzas topped with fresh mozzarella, tomato sauce, and your choice of toppings. A crowd-pleasing snack for parties and gatherings.',
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
                image: 'snack4.jpeg',
                name: 'Samosa',
                description: 'Crispy, golden pastry filled with spiced potatoes and peas. Served with mint chutney. A classic snack that everyone loves.',
                size: '3″',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    '4 pcs': { price: 300 },
                    '8 pcs': { price: 550 },
                    '12 pcs': { price: 800 }
                }
            }
        ]
    }

    // 👇 Add more categories below — copy the pattern above.
    // Example:
    //
    // cakes: {
    //     icon: 'fa-birthday-cake',
    //     label: 'Cakes',
    //     items: [
    //         {
    //             image: 'cake1.jpeg',
    //             name: 'Chocolate Fudge Cake',
    //             description: 'Rich chocolate cake with fudge frosting…',
    //             size: '8″',
    //             serves: 'serves 10-12',
    //             rating: 5,
    //             packs: {
    //                 'Half Kg': { price: 1500 },
    //                 '1 Kg': { price: 2800 }
    //             }
    //         }
    //     ]
    // }
};