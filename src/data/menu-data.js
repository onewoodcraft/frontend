import home_2 from '@assets/img/menu/menu-home-2.jpg';
const menu_product_img_1 = '/assets/img/menu/product/menu-product-img-1.jpg';
const menu_product_img_2 = '/assets/img/menu/product/menu-product-img-2.jpg';

const menu_data = [
  {
    id: 1,
    products: true,
    title: 'Products',
    link: '/shop',
    product_pages: [
      {
        title: 'Shop Categories',
        link: '/shop',
        mega_menus: [
          { title: 'Chopping Boards', link: '/shop?category=chopping-boards', img: menu_product_img_1 },
          { title: 'Platters', link: '/shop?category=platters', img: menu_product_img_1 },
          { title: 'Trays', link: '/shop?category=trays', img: menu_product_img_1 },
          { title: 'Planters', link: '/shop?category=planters', img: menu_product_img_2 },
          { title: 'Bowls', link: '/shop?category=bowls', img: menu_product_img_2 },
          { title: 'Cake Stands', link: '/shop?category=cake-stands', img: menu_product_img_2 },
          { title: 'Gifting', link: '/shop?category=gifting' },
        ]
      },
      {
        title: 'Gifting Categories',
        link: '/shop?category=gifting',
        mega_menus: [
          { title: 'Wedding Gifting', link: '/shop?category=gifting&subcategory=wedding-gifting' },
          { title: 'Corporate Gifting', link: '/shop?category=gifting&subcategory=corporate-gifting' },
          { title: 'Festive Gifting', link: '/shop?category=gifting&subcategory=festive-gifting' },
          { title: 'Housewarming Gifting', link: '/shop?category=gifting&subcategory=housewarming-gifting' },
          { title: 'Anniversary Gifting', link: '/shop?category=gifting&subcategory=anniversary-gifting' },
        ]
      },
      {
        title: 'Shop Pages',
        link: '/shop',
        mega_menus: [
          { title: 'All Products', link: '/shop' },
          { title: 'Product Details', link: '/product-details' },
          { title: 'Shopping Cart', link: '/cart' },
          { title: 'Checkout', link: '/checkout' },
          { title: 'My Account', link: '/profile' },
        ]
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Shop',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Right Sidebar', link: '/shop-right-sidebar' },
      { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: 'Coupons',
    link: '/coupon',
  },
  {
    id: 4,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog List', link: '/blog-list' },
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
      { title: 'Gifting', link: '/shop?category=gifting' },
      { title: 'Wedding Gifting', link: '/shop?category=gifting&subcategory=wedding-gifting' },
      { title: 'Corporate Gifting', link: '/shop?category=gifting&subcategory=corporate-gifting' },
      { title: 'Festive Gifting', link: '/shop?category=gifting&subcategory=festive-gifting' },
      { title: 'Housewarming Gifting', link: '/shop?category=gifting&subcategory=housewarming-gifting' },
      { title: 'Anniversary Gifting', link: '/shop?category=gifting&subcategory=anniversary-gifting' },
    ],
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Shop Pages',
    link: '/shop',
    sub_menus: [
      { title: 'All Products', link: '/shop' },
      { title: 'Product Details', link: '/product-details' },
      { title: 'Shopping Cart', link: '/cart' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'My Account', link: '/profile' },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: 'Coupons',
    link: '/coupon',
  },
  {
    id: 4,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog List', link: '/blog-list' },
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