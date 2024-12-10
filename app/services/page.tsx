import { Metadata } from 'next';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';

export const metadata: Metadata = {
  title: 'Services',
};

export default function Page() {
  return (
    <>
      <main>

        <div className="divider divider-primary"></div>
        
        <p>
          At Bakery by Aamira, we are passionate about creating baked goods that
          bring joy to every occasion. Our menu features a diverse selection of
          treats, each crafted with care and the finest ingredients. Here is a
          taste of what we have to offer:
        </p>

        <br/>

        <h1 id="bakery" className="text-4xl px-2 py-1 mb-3 text-center bg-primary">
          Bakery
        </h1>

        <br/>

        <SubHeading>Artisan Breads</SubHeading>
        <p>
          Start your day with our freshly baked artisan breads. From rustic
          sourdough and hearty whole grain to light and fluffy brioche, our
          breads are made using traditional techniques for the perfect crust and
          flavor. Each loaf is baked daily, ensuring maximum freshness.
        </p>

        <SubHeading>Flaky Pastries</SubHeading>
        <p>
          Indulge in our selection of delicate pastries, perfect for breakfast
          or an afternoon pick-me-up. Try our buttery croissants, flaky pain au
          chocolat, or seasonal fruit danishes, all made with layers of love and
          skill.
        </p>

        <SubHeading>Decadent Cakes</SubHeading>
        <p>
          Celebrate lifes special moments with our beautifully crafted cakes.
          Whether you are looking for a classic vanilla layer cake, a rich
          chocolate ganache, or a tangy lemon drizzle, each cake is designed to
          be as delicious as it is stunning. Custom orders are welcome for
          birthdays, weddings, and other celebrations!
        </p>

        <SubHeading>Mouthwatering Cookies</SubHeading>
        <p>
          Our cookie selection is a must-try! From classic chocolate chip and
          oatmeal raisin to unique flavor combinations like salted caramel
          pecan, each cookie is baked to perfection, creating that delightful
          chewy center and crispy edge you love.
        </p>

        <SubHeading>Seasonal Specials</SubHeading>
        <p>
          We love to celebrate the flavors of the season! Be sure to check out
          our rotating selection of seasonal treats, from pumpkin spice muffins
          in the fall to refreshing lemon tarts in the summer.
        </p>

        <SubHeading>Gluten-Free and Vegan Options </SubHeading>
        <p>
          At Bakery by Aamira, we believe everyone should enjoy delicious baked
          goods. That is why we offer a range of gluten-free and vegan options
          that are just as satisfying and flavorful as our traditional items.
        </p>

        <br/>

        <h1 id="drinks" className="text-4xl px-2 py-1 mb-3 text-center bg-primary">
          Drinks
        </h1>

        <br/>

        <SubHeading>Freshly Brewed Coffee</SubHeading>
        <p>
          Experience the rich aroma of our artisanal coffee, sourced from the
          finest beans. Each cup is expertly brewed to deliver a bold flavor,
          perfect for pairing with any pastry.
        </p>

        <SubHeading>Espresso</SubHeading>
        <p>
          For those who appreciate intensity, our espresso is a small but mighty
          shot of pure coffee bliss. Crafted with precision, it’s rich, creamy,
          and invigorating.
        </p>

        <SubHeading>Cappuccino</SubHeading>
        <p>
          A delightful balance of espresso, steamed milk, and frothy foam, our
          cappuccino is topped with a dusting of cocoa for an added touch of
          sweetness. A perfect companion to any sweet treat!
        </p>

        <SubHeading>Herbal Tea Selection</SubHeading>
        <p>
          Choose from a variety of fragrant herbal teas, including chamomile,
          peppermint, and hibiscus. Each cup is brewed to perfection, offering a
          soothing and aromatic experience.
        </p>

        <SubHeading>Iced Latte</SubHeading>
        <p>
          Cool down with our refreshing iced latte! Smooth espresso is combined
          with cold milk and ice, making it a perfect drink for a warm day.
          Customize it with flavored syrups for an extra treat!
        </p>

        <SubHeading>Chai Latte</SubHeading>
        <p>
          A spiced blend of black tea and steamed milk, our chai latte is
          infused with aromatic spices like cinnamon and cardamom. Enjoy it hot
          or iced for a flavorful experience.
        </p>

        <SubHeading>Freshly Squeezed Juices</SubHeading>
        <p>
          Quench your thirst with our vibrant selection of freshly squeezed
          juices, including classic orange, zesty lemon, and refreshing apple.
          Packed with vitamins and bursting with flavor!
        </p>

        <SubHeading>Hot Chocolate</SubHeading>
        <p>
          Indulge in our rich, velvety hot chocolate, made with premium cocoa
          and topped with whipped cream. A decadent treat that pairs wonderfully
          with our baked goods!
        </p>

        <SubHeading>Smoothies</SubHeading>
        <p>
          Choose from our fruity smoothies made with fresh ingredients, like
          banana, strawberry, and spinach. Each blend is creamy, delicious, and
          full of nutrients—perfect for a quick boost!
        </p>

        <SubHeading>Sparkling Water</SubHeading>
        <p>
          Refresh yourself with our sparkling water, served chilled with a slice
          of lemon or lime. A simple yet elegant choice to cleanse the palate
          between bites!
        </p>

        <div className="divider divider-primary"></div>
        
      </main>
    </>
  );
}
