import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import member1 from '../assets/images/member1.webp';
import member2 from '../assets/images/member2.webp';
import member3 from '../assets/images/member3.webp';
import member4 from '../assets/images/member4.webp';
import member5 from '../assets/images/member5.webp';
import member6 from '../assets/images/member6.webp';
import navArrow from '../assets/images/NavArrow.svg';
import { Link, useNavigate } from 'react-router-dom';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Page entry animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth page transition function
  const handlePageTransition = (url) => {
    setIsTransitioning(true);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add fade out effect
    setTimeout(() => {
      navigate(url);
    }, 300);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Sara Jessica",
      position: "Chief Executive Officer",
      image: member1,
      link: "/team/sara-jessica"
    },
    {
      id: 2,
      name: "John Doe",
      position: "Chief Marketing Officer",
      image: member2,
      link: "/team/john-doe"
    },
    {
      id: 3,
      name: "Sarah Davis",
      position: "Senior Marketing Strategist",
      image: member3,
      link: "/team/sarah-davis"
    },
    {
      id: 4,
      name: "Alex Kim",
      position: "Head of SEO",
      image: member4,
      link: "/team/alex-kim"
    },
    {
      id: 5,
      name: "Tom Clark",
      position: "PPC Specialist",
      image: member5,
      link: "/team/tom-clark"
    },
    {
      id: 6,
      name: "Nina Roberts",
      position: "Data Analyst",
      image: member6,
      link: "/team/nina-roberts"
    }
  ];

  return (
    <section 
      className={`py-20 px-4 bg-white transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isTransitioning ? 'opacity-0 -translate-y-8' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
            Meet Our Team
          </div>
          <div className="max-w-4xl mx-auto mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight mt-3">
              The Minds Behind Skyrocket
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-secondaryTextColor leading-wide tracking-tight font-medium">
              Meet the minds behind our success — a team of passionate experts whose unique skills help drive real results for our clients.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`w-full max-w-[90%] sm:max-w-[80%] md:max-w-full mx-auto flex flex-col text-center no-underline group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => handlePageTransition(`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`)}
              style={{
                color: '#525866',
                transitionDelay: `${index * 0.1 + 0.4}s`
              }}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden text-textColor rounded-[24px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[26rem] object-cover rounded-[24px] transition-all duration-400 ease-in-out"
                  style={{
                    filter: hoveredMember === member.id ? 'blur(2px)' : 'blur(0px)',
                    transform: hoveredMember === member.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-textColor bg-opacity-10 rounded-[24px] transition-opacity duration-400 ease-in-out"
                  style={{
                    opacity: hoveredMember === member.id ? 1 : 0
                  }}
                >
                  <div className="bg-white text-textColor px-6 py-3 rounded-full flex items-center gap-2 font-semibold transform transition-transform duration-300 hover:scale-105">
                    <span>See Profile</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#525866' }}>
                  {member.name}
                </h3>
                <div className="text-base" style={{ color: '#525866' }}>
                  {member.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-3 transition-all duration-700 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button
            onClick={() => handlePageTransition('/contact-us')}
            className="group inline-flex items-center gap-2 bg-secondary hover:bg-hoverColor text-textColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Join Our Team
            </span>
            <img
              src={navArrow}
              alt="navigation arrow"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;