import React from 'react'

const HeroSection = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Innovative Lösungen für Ihre Bauprojekte
      </h1>
      <p className="mb-8 leading-relaxed">Willkommen bei unserem Bauingenieurbüro! Wir bieten innovative und maßgeschneiderte Lösungen für Ihre Bauprojekte. Mit unserem erfahrenen Team aus Bauingenieuren und Experten unterstützen wir Sie von der Planung bis zur Umsetzung und sorgen für die erfolgreiche Realisierung Ihrer Vorhaben. Egal, ob es sich um Neubauten, Sanierungen oder Infrastrukturprojekte handelt, wir setzen auf höchste Qualität, Effizienz und Nachhaltigkeit. Kontaktieren Sie uns noch heute, um mehr über unsere Dienstleistungen zu erfahren und gemeinsam an Ihrem nächsten Bauprojekt zu arbeiten.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Kontakt</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>  )
}

export default HeroSection