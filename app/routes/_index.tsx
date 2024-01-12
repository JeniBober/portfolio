export default function Index() {
  return (
    <div className="my-20 md:grid md:grid-cols-[2fr,_1fr] gap-8 md:gap-12 flex flex-col-reverse">
      <div className="">
        <p className="md:text-left text-center">
          Hi, I'm Jeni Bober—an aspiring product manager with a background in personalized customer
          care from diverse sectors such as public service, fashion, and real estate. Currently, I'm
          moving towards product management, driven by my passion for collaboration and
          problem-solving. As a student of life, I thrive on learning and am eager to bring my
          enthusiasm to your team. In my free time, I enjoy crafting miniatures and hitting the
          slopes for some snowboarding fun.
        </p>
      </div>
      <div className="w-52 flex-initial mx-auto">
        <img src="/images/read2.jpg" className="object-contain" alt="" />
      </div>
    </div>
  );
}
