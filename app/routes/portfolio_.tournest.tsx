import { Link } from '@remix-run/react';

export default function TourNest() {
  return (
    <>
      <div className="my-20 flex items-start flex-wrap flex-col ">
        <Link to="https://tournest.jenibober.com/" className="font-bold text-blue-800">
          Link to product
        </Link>
        <h1 className="font-bold text-3xl my-3">About TourNest</h1>

        <div>
        <img src="/images/tournest-map.png" className="w-full mx-auto py-6" alt="TourNest map screenshot" />\
        </div>

        <h2 className="font-bold text-2xl my-3">What is it?</h2>
        <p>
          TourNest is a streamlined web application designed for real estate agents to create, manage, and share property tour
          itineraries with their clients. It combines property management with interactive mapping to provide a seamless
          experience for both agents and home buyers.
        </p>

        <h2 className="font-bold text-2xl my-3">What problem does it solve?</h2>
        <p>
          Real estate agents frequently struggle with organizing multiple property viewings in a single day. They need to
          coordinate addresses, viewing times, and property details while providing this information to clients in an accessible format.
          Existing solutions often lack visual mapping integration or are overly complex, leading to confusion and inefficiency.
        </p>

        <h2 className="font-bold text-2xl my-3">How does it solve it?</h2>
        <p>
          TourNest simplifies the process by allowing agents to quickly input property details including address, price,
          bedrooms, bathrooms, square footage, and viewing times. The application automatically geocodes addresses using
          Google Maps and displays all properties on an interactive map for clear visualization of the tour route.
        </p>
        <p>
          Once properties are added, agents can generate a shareable link for clients that displays a clean, organized view
          of all properties on the tour along with an interactive map. The application also offers PDF export functionality
          for clients who prefer printed itineraries. The visual presentation with property cards and map markers makes it
          simple for clients to understand the day's viewing schedule.
        </p>

        <h2 className="font-bold text-2xl my-3">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Interactive Google Maps integration with property markers</li>
          {/* add image of map */}
          <li>Address autocomplete for accurate location data</li>
          <li>Detailed property information including images</li>
          <li>Time-based tour scheduling</li>
          <li>Shareable client view with responsive design</li>
          <li>PDF export for printing hard copies</li>
          {/* add pdf */}

          <li>Clean, modern interface with intuitive property cards</li>
        </ul>

        <h2 className="font-bold text-2xl my-3">Technologies Used</h2>
        <p>
          TourNest is built with modern web technologies including Next.js, React, TypeScript, Tailwind CSS,
          Google Maps API integration, and PDF generation capabilities. The application uses a responsive design
          approach to ensure usability across desktop and mobile devices.
        </p>
        <h2 className="font-bold text-2xl my-3">PDF Export</h2>

        <embed src="/assets/tournest.pdf" width="100%" height="1000px" />
      </div>
    </>
  );
}
