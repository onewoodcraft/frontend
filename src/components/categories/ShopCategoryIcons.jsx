import React from "react";
import Link from "next/link";

const categories = [
  { name: "Kitchenware", icon: "🍳", link: "/shop?category=kitchenware" },
  { name: "Tableware", icon: "🍽️", link: "/shop?category=tableware" },
  { name: "Serveware", icon: "🥣", link: "/shop?category=serveware" },
  { name: "Decor", icon: "🕰️", link: "/shop?category=decor" },
  { name: "Furniture", icon: "🪑", link: "/shop?category=furniture-lighting" },
  { name: "Lighting", icon: "💡", link: "/shop?category=furniture-lighting" },
];

const ShopCategoryIcons = () => (
  <section className="shop-category-icons-section" style={{ background: '#fff', padding: '40px 0' }}>
    <div className="container">
      <h2 className="text-center mb-3" style={{ fontWeight: 600 }}>shop by categories</h2>
      <p className="text-center mb-5" style={{ color: '#555' }}>
        explore exquisite home collection based on our ethos of six brand pillars
      </p>
      <div className="row justify-content-center align-items-center">
        {categories.map((cat) => (
          <div key={cat.name} className="col-6 col-md-2 text-center mb-4">
            <Link href={cat.link} className="d-block" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontSize: 48, marginBottom: 10 }}>{cat.icon}</div>
              <div style={{ fontWeight: 500 }}>{cat.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ShopCategoryIcons; 