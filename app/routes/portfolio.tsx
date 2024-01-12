
export default function Portfolio() {

  const projects = [
    {
      name: 'Paper Joy Cards',
      description:
        'A full-stack e-commerce website built with React, Next.js, and MongoDB. Users can browse and purchase cards, as well as add new cards to the site.',
      image: '/images/paperjoycards.png',
      url: 'https://paperjoycards.vercel.app/',
    },
  ];

  return (
    <div className="my-20 flex items-center flex-wrap gap-8">
      {projects.map((project, i) => (
        <div
          key={i}
          className="w-[200px] border-spacing-8 border-slate-500 border h-[200px] overflow-hidden"
        >
          <img src={project.image} alt="" className="w-full" />
        </div>
      ))}
    </div>
  );
}
