"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MessageCircle, Utensils } from 'lucide-react';

export default function LandingPage() {
  const whatsappHref = "https://wa.me/1234567890";
  
  const openFullMenu = () => {
    const images = [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRpVKkc7GzpXxCAmMPKnPiBxMP/uploaded-1776862825826-2yyrt0l1.jpg",      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRpVKkc7GzpXxCAmMPKnPiBxMP/uploaded-1776862825827-6sxva9w9.jpg",      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRpVKkc7GzpXxCAmMPKnPiBxMP/uploaded-1776862825827-o5t6jdk4.jpg",      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRpVKkc7GzpXxCAmMPKnPiBxMP/uploaded-1776862825827-ng1mm1vt.jpg",      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRpVKkc7GzpXxCAmMPKnPiBxMP/uploaded-1776862825827-wrmh9olq.jpg"
    ];
    
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(
        '<html><body>' + 
        images.map(src => `<img src="${src}" style="width:100%; margin-bottom: 10px;" />`).join('') + 
        '</body></html>'
      );
      newWindow.document.close();
    }
  };

  return (
    <ThemeProvider defaultButtonVariant="elastic-effect" defaultTextAnimation="background-highlight" borderRadius="soft" contentWidth="small" sizing="large" background="floatingGradient" cardStyle="soft-shadow" primaryButtonStyle="gradient" secondaryButtonStyle="radial-glow" headingFontWeight="medium">
      <div id="nav" data-section="nav">
        <NavbarStyleCentered brandName="Chopsticks" navItems={[{name: "Menu", id: "cuts"}, {name: "Breakfast", id: "experience"}, {name: "About", id: "about"}, {name: "Contact", id: "contact"}]} button={{text: "Order on WhatsApp", href: whatsappHref}} />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel 
          title="Authentic Asian Taste in Your City" 
          description="Fresh, Hot & Delicious – Order Now" 
          background={{variant: "gradient-bars"}} 
          buttons={[{text: "Order on WhatsApp", href: whatsappHref}, {text: "View Menu", onClick: openFullMenu}]} 
          mediaItems={[{imageSrc: "http://img.b2bpic.net/free-photo/defocused-statue-with-bowl-noodles-with-vegetables_23-2148382866.jpg", imageAlt: "Noodles"}, {imageSrc: "http://img.b2bpic.net/free-photo/georgian-khinkali-table_140725-8580.jpg", imageAlt: "Momos"}, {imageSrc: "http://img.b2bpic.net/free-photo/side-view-green-beans-garlic-bowls-spices-oil-bottle-plate-green-beans-tomatoes-table_140725-123080.jpg", imageAlt: "Sizzlers"}]} 
        />
      </div>
      <div id="about" data-section="about">
        <MetricSplitMediaAbout tag="Our Story" tagIcon={Utensils} title="Authentic Flavors, Fresh Ingredients" description="At Chopsticks, we bring the vibrant street food culture of Asia to your doorstep. From traditional Tibetan Momos to bold Szechwan stir-fries, we use only the freshest ingredients to ensure every bite is an authentic culinary journey." metrics={[{value: "10+", title: "Years Experience"}, {value: "50+", title: "Signature Dishes"}]} imageSrc="http://img.b2bpic.net/free-photo/antique-ceiling-lamp_1203-804.jpg" mediaAnimation="slide-up" metricsAnimation="slide-up" useInvertedBackground={false} />
      </div>
      <div id="cuts" data-section="cuts">
        <ProductCardTwo title="Best Sellers" description="Our most popular Asian & Chinese delicacies" tag="Menu Highlights" gridVariant="three-columns-all-equal-width" animationType="slide-up" textboxLayout="default" useInvertedBackground={false} products={[{id: "p1", brand: "Asian", name: "Chicken Manchurian", price: "$12", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-korean-style_1339-5748.jpg"}, {id: "p2", brand: "Chinese", name: "Szechwan Chicken", price: "$14", rating: 5, reviewCount: "95", imageSrc: "http://img.b2bpic.net/free-photo/noodles-with-meat-beans-mushrooms_2829-13665.jpg"}, {id: "p3", brand: "Chinese", name: "Chicken Chilly", price: "$13", rating: 4, reviewCount: "88", imageSrc: "http://img.b2bpic.net/free-photo/mangal-salad-onion-garlic-tomato-top-view_140725-11300.jpg"}, {id: "p4", brand: "Tibetan", name: "Veg Momos", price: "$8", rating: 5, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-food-table-still-life_23-2150751958.jpg"}, {id: "p5", brand: "Chinese", name: "Szechwan Noodles", price: "$10", rating: 4, reviewCount: "70", imageSrc: "http://img.b2bpic.net/free-photo/top-view-chinese-hot-pot_23-2149529788.jpg"}, {id: "p6", brand: "Chinese", name: "Singapore Noodles", price: "$11", rating: 4, reviewCount: "65", imageSrc: "http://img.b2bpic.net/free-photo/stir-fried-instant-noodles-with-seafood-variety-vegetable_1150-27317.jpg"}]} buttons={[{text: "Order via WhatsApp", href: whatsappHref}]} />
      </div>
      <div id="experience" data-section="experience">
        <FeatureCardNineteen title="Breakfast & Snacks" description="Start your day with a flavorful twist or grab a quick, delicious snack." tag="Breakfast Menu" features={[{tag: "Lassi", title: "Signature Lassi", subtitle: "Sweet, Banana, Chocolate", description: "Creamy, refreshing lassi varieties to quench your thirst.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-pink-milkshakes_23-2148635674.jpg"}, {tag: "Milkshakes", title: "Handcrafted Milkshakes", subtitle: "Mango, Strawberry, Chocolate", description: "Rich and thick shakes made with real fruit and premium cocoa.", imageSrc: "http://img.b2bpic.net/free-photo/strawberry-smoothie-with-tiny-waffle-chocolate-slices-strawberries-white-plate-dark-blue-surface_114579-33851.jpg"}, {tag: "Pancakes", title: "Delightful Pancakes", subtitle: "Plain, Chocolate, Banana", description: "Fluffy, warm pancakes topped with your favorite flavors.", imageSrc: "http://img.b2bpic.net/free-photo/soft-focus-stack-fluffy-pancakes-with-fresh-fruits-honey-wooden-board_181624-56434.jpg"}]} textboxLayout="default" useInvertedBackground={true} />
      </div>
      <div id="team" data-section="team">
        <TeamCardTwo title="Our Culinary Team" description="The masters behind our authentic flavors" tag="Meet the Team" members={[{id: "t1", name: "Chef Wang", role: "Head Chef", description: "Specializing in authentic Szechwan techniques.", imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-male-chef-wearing-uniform-keeping-showing-yes-gesture-with-closed-eyes-isolated-brown-background_141793-136535.jpg"}, {id: "t2", name: "Chef Tenzin", role: "Momo Specialist", description: "Expert in traditional Tibetan dough and spice blending.", imageSrc: "http://img.b2bpic.net/free-photo/japanese-food-cooking_23-2149428710.jpg"}]} gridVariant="two-columns-alternating-heights" animationType="slide-up" textboxLayout="default" useInvertedBackground={false} />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix title="Guest Reviews" description="What our customers say about us" tag="Feedback" testimonials={[{id: "r1", name: "Sarah L.", handle: "@foodie", testimonial: "The Szechwan Chicken is simply the best in the city!", imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg"}, {id: "r2", name: "Mike D.", handle: "@local", testimonial: "The Momos are authentic and the service is super fast via WhatsApp.", imageSrc: "http://img.b2bpic.net/free-photo/pretty-asian-look-with-modest-hairdo-sit-table-eat-sushi-rolls-smiling-isolated-white_231208-3047.jpg"}]} animationType="slide-up" textboxLayout="default" useInvertedBackground={true} />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitMedia title="FAQ" description="Common questions about Chopsticks" faqs={[{id: "f1", title: "Do you offer delivery?", content: "Yes! Order via our WhatsApp button for fast, hot delivery."}, {id: "f2", title: "What cuisine do you serve?", content: "We specialize in Chinese, Tibetan, and Asian Fusion dishes."}]} imageSrc="http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629587.jpg" faqsAnimation="slide-up" textboxLayout="default" useInvertedBackground={false} />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter tag="Order Now" title="Ready to Feast?" description="Click below to order directly via WhatsApp and get your meal delivered fast!" tagIcon={MessageCircle} background={{variant: "sparkles-gradient"}} buttonText="Chat on WhatsApp" />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase logoText="Chopsticks" columns={[{title: "Menu", items: [{label: "Full Menu", href: "#cuts"}, {label: "Breakfast", href: "#experience"}]}, {title: "Contact", items: [{label: "Call: +123 456 789", href: "tel:+123456789"}, {label: "WhatsApp", href: whatsappHref}]}]} />
      </div>
    </ThemeProvider>
  );
}