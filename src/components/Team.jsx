import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import member1 from '../assets/images/member1.webp';
import member2 from '../assets/images/member2.webp';
import member3 from '../assets/images/member3.webp';
import member4 from '../assets/images/member4.webp';
import member5 from '../assets/images/member5.webp';
import member6 from '../assets/images/member6.webp';
import navArrow from '../assets/images/NavArrow.svg';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
            Our Team
          </div>
          <div className="max-w-4xl mx-auto mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-textColor leading-tight tracking-tight mt-3">
              The Minds Behind Skyrocket
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-secondaryTextColor leading-relaxed">
              Meet the minds behind our success — a team of passionate experts whose unique skills help drive real results for our clients.
            </p>
          </div>
        </div>

        {/* Team Grid */}
      {/* Team Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {teamMembers.map((member, index) => (
    <a
      key={member.id}
      href={member.link}
      className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-full mx-auto flex flex-col text-center no-underline group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
      style={{
        color: '#525866',
        animationDelay: `${index * 0.1}s`
      }}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      {/* Image Container */}
      <div className="relative mb-6 overflow-hidden text-textColor">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[26rem] object-cover rounded-[24px] transition-all duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-textColor bg-opacity-20 flex items-center justify-center transition-opacity duration-500 rounded-[24px]"
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
    </a>
  ))}
</div>


        {/* CTA Button */}
        <div className="text-center mt-3">
          <a
            href="/get-in-touch"
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
          </a>
        </div>

      </div>
    </section>
  );
};

export default Team;
