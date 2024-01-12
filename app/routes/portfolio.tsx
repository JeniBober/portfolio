import { Link } from '@remix-run/react';

export default function Portfolio() {
  const projects = [
    {
      name: 'Paper Joy Cards',
      description:
        'A full-stack e-commerce website built with React, Next.js, and MongoDB. Users can browse and purchase cards, as well as add new cards to the site.',
      image: '/images/paperjoycards.png',
      url: 'https://paperjoycards.com/',
      id: 'paperjoycards',
    },
    {
      name: 'Escrow Calendar',
      description:
        'An escrow calendar generator. Fill in all your dates and create a calendar that you can share as a pdf.',
      image: '/images/escrow.png',
      url: 'https://escrow.jenibober.com/',
      id: 'escrow',
    },
  ];

  return (
    <div className="my-20 flex items-centergap-8 w-full">
      <div className="flex flex-wrap w-full gap-12 justify-center">
        {projects.map((project, i) => (
          <div key={i} className="">
            <div className=" h-[250px] w-[250px] border-spacing-8  border-slate-500 border  overflow-hidden">
              <Link to={`/portfolio/${project.id}`}>
                <img src={project.image} alt="" className="object-cover w-full h-full" />
              </Link>
            </div>
            <p className="text-center italic">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
