import { Link } from '@remix-run/react';

export default function PaperJoyCards() {
  return (
    <>
      <div className="my-20 flex items-start flex-wrap flex-col ">
        <Link to="https://paperjoycards.com" className="font-bold text-blue-800">
          Link to product
        </Link>
        <h1 className="font-bold text-3xl my-3">About Paper Joy Cards</h1>
        <p>
          Welcome to Paper Joy Cards, where greetings come to life in the form of exquisite paper
          flower bouquet pop-up cards. We believe in turning moments of connection into lasting
          memories with our 3D, visually stunning, and premium greeting card products.
        </p>

        <h2 className="font-bold text-2xl my-3">Our Story</h2>
        <p>
          At Paper Joy Cards, we embarked on a mission to redefine the art of gifting greetings. In
          a world filled with generic cards that are often read and discarded, we saw an opportunity
          to create something truly special. Our inspiration stems from the desire to offer a
          premium alternative to traditional greeting cards.
        </p>

        <ul className="">
          <h2 className="font-bold text-2xl my-3">What Sets Us Apart?</h2>
          <li className=" py-1">
            <strong>• Premium Quality:</strong> Immerse yourself in the beauty of our meticulously
            crafted paper flower bouquet pop-up cards. Each card is a masterpiece, designed to
            captivate and delight.
          </li>
          <li className=" py-1">
            <strong>• Lasting Impressions:</strong> Unlike ordinary cards, our creations are made to
            last. The removable note card allows recipients to treasure and display the heartfelt
            message, turning your greetings into a timeless keepsake.
          </li>
          <li className=" py-1">
            <strong>• Affordable Elegance:</strong> Say goodbye to expensive flower bouquets that
            wither away. Our cards offer an affordable yet elegant alternative, bringing the joy of
            flowers that stays vibrant forever.
          </li>
          <li className=" py-1">
            <strong>• Personalized Touch:</strong> Soon, we'll be introducing a personalized
            handwritten option. Let us pen your heartfelt message and send your greetings directly
            to your loved ones. Never forget to send special wishes again.
          </li>
        </ul>

        <h2 className="font-bold text-2xl my-3">Our Mission</h2>
        <p>
          At Paper Joy Cards, our mission is to bring joy and meaning to every occasion. We are
          committed to creating not just cards but cherished memories that stand the test of time.
          Our values center around creativity, quality, and the belief that every connection
          deserves to be celebrated uniquely.
        </p>

        <div>
          <img src="/images/paperjoycards.png" className="w-[50%] mx-auto" alt="" />
        </div>
      </div>
    </>
  );
}
