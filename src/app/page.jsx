import Wrapper from "@/layout/wrapper";
import HeaderTwo from '@/layout/headers/header-2';
import WoodcraftBanner from '@/components/banner/woodcraft-banner';
import WoodcraftCategory from '@/components/categories/woodcraft-category';
import PopularProducts from '@/components/products/woodcraft/popular-products';
import ProductArea from '@/components/products/woodcraft/product-area';
import WeeksFeatured from '@/components/products/woodcraft/weeks-featured';
import TrendingProducts from '@/components/products/woodcraft/trending-products';
import BestSellerProducts from '@/components/products/woodcraft/best-seller-products';
import WoodcraftTestimonial from '@/components/testimonial/woodcraft-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import InstagramAreaTwo from '@/components/instagram/instagram-area-2';
import Footer from '@/layout/footers/footer';

export const metadata = {
  title: 'OneWood - Home',
}

export default function HomePage() {
  return (
    <Wrapper>
      <HeaderTwo/>
      <WoodcraftBanner/>
      <WoodcraftCategory/>
      <PopularProducts/>
      <ProductArea/>
      <WeeksFeatured/>
      <TrendingProducts/>
      <BestSellerProducts/>
      <WoodcraftTestimonial/>
      <FeatureAreaTwo/>
      <InstagramAreaTwo/>
      <Footer style_2={true} />
    </Wrapper>
  )
}
