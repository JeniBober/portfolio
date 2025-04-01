export default function Index() {
  return (

    <>

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

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Checkout my commercial spot for IBM Hybrid Cloud!</h3>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', paddingBottom: '40px' }}>
          <iframe
            src="https://www.ispot.tv/share/O4d7"
            style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          />
        </div>
      </div>

    </>
  );
}
