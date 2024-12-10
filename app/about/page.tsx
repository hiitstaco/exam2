import { Metadata } from 'next';
import MainHeading from '../components/MainHeading';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function Page() {
  return (
    <>
      <main>
        <MainHeading> All About Bakery By Aamira </MainHeading>

        <p>
          Our story begins with our founder, Aamira, whose love for
          baking has been a lifelong journey.
        </p>
        <br/>
        <p>
          From a young age, Aamira found joy in the kitchen,
          experimenting with flavors and techniques passed down through family
          traditions. Baking has always been more than just a hobby; it’s a way
          to connect with loved ones and create lasting memories. With each
          recipe, she discovered the magic that happens when
          ingredients come together to create something delicious—a magic that
          she now strives to share with our community.
        </p>
        <br/>
        <p>
          After years of perfecting her craft, Aamira
          decided to turn this passion into a business. She opened
          Bakery By Aamira with the vision of creating a warm, inviting space where
          everyone can enjoy freshly baked treats made with love and care. Our
          bakery is not just about the delicious pastries and cakes; its about
          fostering connections and celebrating lifes special moments through
          food.
        </p>
        <br/>
        <p>
          At our bakery, we aim to offer a diverse selection of baked goods
          that cater to all tastes and preferences. Whether it’s a classic cake
          for a birthday celebration, artisanal bread for a cozy dinner, or a
          sweet treat for an afternoon pick-me-up, we pour our hearts into every
          creation.
        </p>
        <br/>
        <p>
          Our mission is to spread joy through our baked goods and create a
          sense of community where everyone feels welcome. We hope to inspire
          others to embrace the art of baking and to find joy in the simple act
          of sharing food with friends and family.
        </p>
        <br/>
        <p>
          Thank you for being a part of our journey. We look forward to serving
          you and helping you create sweet memories, one bite at a time!
        </p>

        <div className="divider divider-primary"></div>
        
      </main>
    </>
  );
}
