import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Related from "@/components/Related";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import GDPRFeature from "@/components/GDPRFeature";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Related />
      <Content />
      <Feature />
      <GDPRFeature />
    </main>
  )
}
