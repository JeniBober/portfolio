import { Link } from '@remix-run/react';

export default function Portfolio() {
  const projects = [
    {
      name: 'Paper Joy Cards',
      description: 'Handcrafted greeting cards for all occasions. Powered by Shopify.',
      image: '/images/paperjoycards.png',
      url: 'https://paperjoycards.com/',
      id: 'paperjoycards',
    },
    {
      name: 'Escrow Calendar',
      description: 'An escrow calendar generator tool for real estate.',
      image: '/images/escrow.png',
      url: 'https://escrow.jenibober.com/',
      id: 'escrow',
    },
  ];

  return (
    <div className="my-20 flex items-centergap-8 w-full">
      <div className="flex flex-wrap w-full gap-16 justify-center">
        {projects.map((project, i) => (
          <div key={i} className="w-[250px]">
            <div className="   border-spacing-8  border-slate-500 border  overflow-hidden">
              <Link to={`/portfolio/${project.id}`}>
                <img src={project.image} alt="" className="object-cover h-[250px] w-[250px]" />
              </Link>
            </div>
            <p className="text-center font-semibold">{project.name}</p>
            <p className="text-center italic text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
