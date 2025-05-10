import Link from "next/link";
import { getHomeContent } from "@/lib/contentUtils";
import ImageSlider from "@/components/ImageSlider";

export default async function Home() {
  const { hero, services, cta } = await getHomeContent();
  
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section with Background */}
      <div className="relative min-h-[550px] flex items-center justify-center mb-20 overflow-hidden rounded-xl shadow-2xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-900 opacity-90"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto px-4 py-10">
          {/* Content section that changes order on mobile */}
          <div className="relative z-10 order-2 md:order-1 mt-6 md:mt-0">
            <div className="inline-block px-4 py-1 bg-white text-green-800 rounded-full text-sm font-medium mb-6">
              {hero.badge_text}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {hero.heading}
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              {hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={hero.primary_button_url} 
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                <span>{hero.primary_button_text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href={hero.secondary_button_url} 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 hover:border-green-800 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                <span>{hero.secondary_button_text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Image slider that changes order on mobile */}
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-blue-100 rounded-2xl blur-lg opacity-60"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
              <ImageSlider 
                images={[
                  "/images/Slider1.png",
                  "/images/Slider2.png",
                  "/images/Slider3.png"
                ]}
                className="aspect-[4/3] rounded-xl overflow-hidden w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>



      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-green-800 mb-4">{services.heading}</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          {services.subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.services.map((service, index: number) => (
            <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-${service.color} transform hover:-translate-y-2 transition-transform duration-300`}>
              <div className={`w-16 h-16 bg-${service.color.replace('800', '100').replace('600', '50')} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {service.icon === 'document' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-${service.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {service.icon === 'money' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-${service.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {service.icon === 'consultation' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-${service.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                href={service.button_url} 
                className={`inline-flex items-center text-${service.color} font-medium hover:text-${service.color.replace('800', '700').replace('600', '500')}`}
              >
                <span>{service.button_text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl mb-20">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-blue-900 z-0">
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-white p-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">{cta.heading}</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            {cta.text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={cta.primary_button_url} 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>{cta.primary_button_text}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <a 
              href={cta.secondary_button_url} 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{cta.secondary_button_text}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
