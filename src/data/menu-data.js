// Main menu data
const menu_data = [
  {
    id: 1,
    products: true,
    title: 'Products',
    link: '/shop',
    product_pages: [
      {
        title: 'Categories',
        link: '/shop',
        mega_menus: [
          { title: 'Chopping Boards', link: '/shop?category=chopping-boards' },
          { title: 'Platters', link: '/shop?category=platters' },
          { title: 'Trays', link: '/shop?category=trays' },
          { title: 'Planters', link: '/shop?category=planters' },
          { title: 'Bowls', link: '/shop?category=bowls' },
          { title: 'Cake Stands', link: '/shop?category=cake-stands' },
        ]
      },
      {
        title: 'Gifting',
        link: '/shop?category=gifting',
        mega_menus: [
          { title: 'Wedding Gifting', link: '/shop?category=wedding-gifting' },
          { title: 'Corporate Gifting', link: '/shop?category=corporate-gifting' },
          { title: 'Festive Gifting', link: '/shop?category=festive-gifting' },
          { title: 'Housewarming Gifting', link: '/shop?category=housewarming-gifting' },
          { title: 'Anniversary Gifting', link: '/shop?category=anniversary-gifting' },
        ]
      },
      {
        title: 'Shop By',
        link: '/shop',
        mega_menus: [
          { title: 'New Arrivals', link: '/shop?sort=newest' },
          { title: 'Best Sellers', link: '/shop?sort=best-selling' },
          { title: 'Featured', link: '/shop?featured=true' },
          { title: 'All Products', link: '/shop' },
        ]
      },
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Shop',
    link: '/shop',
    sub_menus: [
      { title: 'All Products', link: '/shop' },
      { title: 'New Arrivals', link: '/shop?sort=newest' },
      { title: 'Best Sellers', link: '/shop?sort=best-selling' },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 4,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
  {
    id: 5,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Chopping Boards', link: '/shop?category=chopping-boards' },
      { title: 'Platters', link: '/shop?category=platters' },
      { title: 'Trays', link: '/shop?category=trays' },
      { title: 'Planters', link: '/shop?category=planters' },
      { title: 'Bowls', link: '/shop?category=bowls' },
      { title: 'Cake Stands', link: '/shop?category=cake-stands' },
    ],
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Gifting',
    link: '/shop?category=gifting',
    sub_menus: [
      { title: 'Wedding Gifting', link: '/shop?category=wedding-gifting' },
      { title: 'Corporate Gifting', link: '/shop?category=corporate-gifting' },
      { title: 'Festive Gifting', link: '/shop?category=festive-gifting' },
      { title: 'Housewarming Gifting', link: '/shop?category=housewarming-gifting' },
      { title: 'Anniversary Gifting', link: '/shop?category=anniversary-gifting' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Shop By',
    link: '/shop',
    sub_menus: [
      { title: 'New Arrivals', link: '/shop?sort=newest' },
      { title: 'Best Sellers', link: '/shop?sort=best-selling' },
      { title: 'Featured', link: '/shop?featured=true' },
      { title: 'All Products', link: '/shop' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]