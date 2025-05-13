'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/lib/contentUtils';

interface ProjectFilterClientProps {
  projects: ProjectItem[];
  projectTypes: string[];
  years: string[];
}

export default function ProjectFilterClient({ projects, projectTypes, years }: ProjectFilterClientProps) {
  const [selectedType, setSelectedType] = useState('All Projects');
  const [selectedYear, setSelectedYear] = useState('All Years');
  
  const filteredProjects = projects.filter((project: ProjectItem) => {
    const typeMatch = selectedType === 'All Projects' || project.type === selectedType;
    const yearMatch = selectedYear === 'All Years' || project.year === selectedYear;
    return typeMatch && yearMatch;
  });
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Type</label>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {projectTypes.map((type: string, index: number) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Year</label>
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {years.map((year: string, index: number) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 mb-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project: ProjectItem, index: number) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No projects match your current filters. Please try different criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  // Use placeholder images if the actual images don't exist yet
  const imagePath = project.image || '/images/projects/placeholder.jpg';
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <div className="h-48 md:h-full w-full relative">
            <Image 
              src={imagePath} 
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="absolute top-0 left-0 bg-blue-900 text-white px-3 py-1 text-sm font-semibold">
            {project.year}
          </div>
          <div className="absolute bottom-0 right-0 bg-green-800 text-white px-3 py-1 text-sm font-semibold">
            {project.type}
          </div>
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold text-blue-900">{project.title}</h2>
            <span className="text-gray-600 text-sm">{project.location}</span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Challenge:</h3>
            <p className="text-gray-600 text-sm">{project.challenge}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Solution & Spear&apos;s Role:</h3>
            <p className="text-gray-600 text-sm">{project.solution}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-green-800 mb-1">Outcome:</h3>
            <p className="text-gray-700 font-medium text-sm">{project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
