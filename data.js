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
        label: 'Deserts',
        items: [
            {
                image: 'desert1.jpg',
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
                image: 'desert2.jpg',
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
                image: 'desert3.jpg',
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
                image: 'desert4.jpg',
                name: 'Panna Cotta',
                description: 'Silky smooth Italian custard infused with vanilla bean, served with a tangy berry compote. Light, elegant, and the perfect ending to any meal.',
                size: '4″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    'Single': { price: 400 },
                    'Twin Pack': { price: 750 }
                }
            },
            {
                image: 'desert5.jpg',
                name: 'Chocolate Lava Cake',
                description: 'Warm chocolate cake with a molten center that flows when you cut into it. Served with a scoop of vanilla ice cream for the ultimate indulgence.',
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
                name: 'Fruit Trifle',
                description: 'Layers of sponge cake, fresh fruits, custard, and whipped cream. A refreshing and colorful dessert that is perfect for gatherings.',
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
                name: 'Red Velvet Cupcake',
                description: 'Moist red velvet cake topped with rich cream cheese frosting. A classic favorite with a beautiful red crumb.',
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
                name: 'Lemon Tart',
                description: 'Buttery tart shell filled with tangy lemon curd, topped with a light meringue. A perfect balance of sweet and sour.',
                size: '4″',
                serves: 'serves 1-2',
                rating: 4,
                packs: {
                    'Single': { price: 350 },
                    'Box of 4': { price: 1300 }
                }
            },
            {
                image: 'desert9.jpg',
                name: 'Chocolate Mousse',
                description: 'Light and airy chocolate mousse made with premium dark chocolate. Served in individual cups for a perfect portion.',
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
            },
            {
                image: 'biscuit4.jpeg',
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
                image: 'biscuit5.jpeg',
                name: 'Oatmeal Raisin Cookies',
                description: 'Hearty oatmeal cookies with plump raisins and a hint of cinnamon. Soft, chewy, and full of wholesome flavor.',
                size: '2.5″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Box of 6': { price: 480 },
                    'Box of 12': { price: 900 }
                }
            },
            {
                image: 'biscuit6.jpeg',
                name: 'Shortbread Fingers',
                description: 'Traditional Scottish shortbread with a rich, buttery flavor and crumbly texture. Dusted lightly with sugar.',
                size: '3″ finger',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    '250g': { price: 400 },
                    '500g': { price: 750 }
                }
            },
            {
                image: 'biscuit7.jpeg',
                name: 'Almond Biscotti',
                description: 'Twice-baked Italian cookies loaded with almonds. Crisp and perfect for dipping in coffee or tea.',
                size: '3″ slice',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    'Box of 6': { price: 600 },
                    'Box of 12': { price: 1100 }
                }
            },
            {
                image: 'biscuit8.jpeg',
                name: 'Ginger Snaps',
                description: 'Spicy and sweet ginger cookies with a snap. Made with real ginger and a touch of molasses.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 4,
                packs: {
                    '250g': { price: 320 },
                    '500g': { price: 600 }
                }
            },
            {
                image: 'biscuit9.jpeg',
                name: 'Peanut Butter Cookies',
                description: 'Rich and nutty peanut butter cookies with a classic fork pattern on top. Soft-baked for the perfect chew.',
                size: '2.5″ round',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    'Box of 6': { price: 500 },
                    'Box of 12': { price: 950 }
                }
            },
            {
                image: 'biscuit10.jpeg',
                name: 'Jam Thumbprint Cookies',
                description: 'Buttery cookies with a sweet jam center. A beautiful and delicious treat for any occasion.',
                size: '2″ round',
                serves: 'serves 1',
                rating: 5,
                packs: {
                    'Box of 6': { price: 550 },
                    'Box of 12': { price: 1000 }
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
            },
            {
                image: 'snack5.jpeg',
                name: 'Chicken Patties',
                description: 'Flaky pastry filled with seasoned chicken and vegetables. Baked to golden perfection for a satisfying snack.',
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
                image: 'snack6.jpeg',
                name: 'Spring Rolls',
                description: 'Crispy vegetable spring rolls served with sweet chili sauce. A light and crunchy snack that everyone enjoys.',
                size: '4″',
                serves: 'serves 1-2',
                rating: 4,
                packs: {
                    '4 pcs': { price: 300 },
                    '8 pcs': { price: 550 }
                }
            },
            {
                image: 'snack7.jpeg',
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
                image: 'snack8.jpeg',
                name: 'Chicken Nuggets',
                description: 'Tender chicken nuggets with a crispy golden coating. Served with ketchup or mayo for dipping.',
                size: '2″',
                serves: 'serves 1-2',
                rating: 5,
                packs: {
                    '6 pcs': { price: 400 },
                    '12 pcs': { price: 750 }
                }
            },
            {
                image: 'snack9.jpeg',
                name: 'French Fries',
                description: 'Golden, crispy french fries seasoned with salt and served with ketchup. A classic snack for all ages.',
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
                image: 'snack10.jpeg',
                name: 'Onion Rings',
                description: 'Crispy battered onion rings fried to golden perfection. Served with a tangy dipping sauce.',
                size: '3″',
                serves: 'serves 2',
                rating: 4,
                packs: {
                    '6 pcs': { price: 350 },
                    '12 pcs': { price: 650 }
                }
            }
        ]
    }
};
