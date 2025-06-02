import React from 'react';
import Link from 'next/link';
import { getProjectsContent } from '@/lib/contentUtils';

export default async function RecentProjectsPage() {
  const { intro } = await getProjectsContent();
  
  // Project listings extracted from the HTML file - balanced to have roughly equal height in both columns
  const leftColumnProjects = [
    { year: "2011", name: "The Bull GC - Sheboygan Falls, WI" },
    { year: "2012", name: "Railside Golf Club - Gibson City, IL" },
    { year: "2012", name: "Turnbull Creek - Kinston Springs TN" },
    { year: "2012", name: "Stillwater GC - Arrington TN" },
    { year: "2013", name: "Saddleback Ski Resort - Rangeley ME" },
    { year: "2013", name: "Crooked Creek GC - Wake County NC" },
    { year: "2013", name: "Burnt Mill GC - Well ME" },
    { year: "2013", name: "Ragged Mt Ski Resort - Danbury NH" },
    { year: "2013", name: "Barefoot Conf. Center - Myrtle Beach SC" },
    { year: "2013", name: "Heritage Hill - Shephersville KY" },
    { year: "2013", name: "Lightlamp Inn - Duncan SC" },
    { year: "2013", name: "New South Park - Buffalo NY" },
    { year: "2014", name: "Badin Inn Center - Badin NC" },
    { year: "2014", name: "Blue Ridge Academy - Landrum SC" },
    { year: "2014", name: "The Max Theaters - Orangeburg SC" },
    { year: "2014", name: "Mooresville GC - Mooresville NC" },
    { year: "2014", name: "Wrens Community Center - Wrens GA" },
    { year: "2015", name: "Anna Maria Community Center - FL" },
    { year: "2015", name: "Eventfully Yours - Grant County IN" },
    { year: "2015", name: "Granville Landing - Butner NC" },
    { year: "2016", name: "Lafayette Center - Lafayette NY" },
    { year: "2016", name: "Railside Community Center - Gibson City IL" },
    { year: "2016", name: "Grande Harbor Marina - Little River SC" },
    { year: "2016", name: "Robinson Courts - Hope Mills NC" },
    { year: "2016", name: "Crescent Golf Club - Salisbury NC" },
    { year: "2017", name: "Rosemary Farm - Leesburg VA" },
    { year: "2017", name: "Dawn Hill Club - Gentry AR" },
    { year: "2017", name: "Dry Ridge Par 3 - Elizabeth City NC" },
    { year: "2017", name: "Pinewild CC - Pinehurst NC" },
    { year: "2017", name: "Castle Bay - Homestead NC" },
    { year: "2017", name: "Allaire Farm - Wall NJ" },
    { year: "2018", name: "Brick Landing GC - Ocean Isle NC" },
  ];

  const rightColumnProjects = [
    { year: "2018", name: "Esmeralda Inn - Chimney Rock NC" },
    { year: "2018", name: "Blue Ridge Center - Linville NC" },
    { year: "2018", name: "Community Center - Bentonville NC" },
    { year: "2019", name: "Forest Oaks GC - Greensboro NC" },
    { year: "2019", name: "Nez Perce Tribe - Clarkston ID" },
    { year: "2019", name: "Tot Hill Farm GC - Asheboro NC" },
    { year: "2019", name: "Vets Center - Unionville NC" },
    { year: "2019", name: "Sanctuary Club - Beaufort SC" },
    { year: "2019", name: "The Woods Club - Hedgesville WV" },
    { year: "2019", name: "Signature Golf Club - Virginia Beach VA" },
    { year: "2020", name: "Salem Glen CC - Clemmons NC" },
    { year: "2020", name: "Grande Ocean - Hilton Head SC" },
    { year: "2020", name: "Royse City Wedding venue - Royse City TX" },
    { year: "2021", name: "4plexs Salisbury NC" },
    { year: "2021", name: "Hayes Center, Carbondale IL" },
    { year: "2021", name: "Etowah Valley Lodge - Etowah NC" },
    { year: "2022", name: "The Sport's Club @ Woods- Hedgeville WV" },
    { year: "2022", name: "Dawn Hill Village - Gentry AR" },
    { year: "2022", name: "Vin RV Parks - Wake Forest NC" },
    { year: "2022", name: "Wilderness Hills RV Pk - Gentry AR" },
    { year: "2022", name: "Tanglewood Lodge - Benton AR" },
    { year: "2022", name: "Large Warehouse - Wallace NC" },
    { year: "2022", name: "Hilton Garden Inn - Morgantown WV" },
    { year: "2023", name: "Tim Hague Apts - Davis WV" },
    { year: "2023", name: "Open Range Storage - Ogden KS" },
    { year: "2023", name: "Northgreen GC - Rocky Mount NC" },
    { year: "2023", name: "Creekwood GC - Franklin TN" },
    { year: "2023", name: "Indian Tree GC - Crane MO" },
    { year: "2024", name: "Brandywine Bay GC - Morehead City NC" },
    { year: "2024", name: "River Bend GC - New Bern NC" },
    { year: "2025", name: "Tanglwoood RV Park - Gentry AR" },
    { year: "2025", name: "Lochmere Golf Club - Cary NC" },
    { year: "2025", name: "Cherokee Tree Houses - Andrews NC" },
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">{intro.heading}</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg mb-10">
            {intro.text}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              {leftColumnProjects.map((project, index) => (
                <div key={`left-${index}`} className="mb-3 pb-3 border-b border-gray-100 flex">
                  <span className="font-semibold text-blue-800 w-16">{project.year}</span>
                  <span className="text-gray-800">{project.name}</span>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div>
              {rightColumnProjects.map((project, index) => (
                <div key={`right-${index}`} className="mb-3 pb-3 border-b border-gray-100 flex">
                  <span className="font-semibold text-blue-800 w-16">{project.year}</span>
                  <span className="text-gray-800">{project.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
