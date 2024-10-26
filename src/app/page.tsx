import Hero from '@/sections/Hero/Hero';
import Header from '../sections/Header/Header';
import LogoTicker from '@/sections/LogoTicker/LogoTicker';
import ProductShowcase from '@/sections/ProductShowcase/ProductShowcase';
import Need from '@/sections/Need/Need';
import Pricing from '@/sections/Pricing/Pricing';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Need />
      <Pricing />
    </>
  );
}
