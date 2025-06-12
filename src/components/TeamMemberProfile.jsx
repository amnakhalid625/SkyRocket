import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import member1 from '../assets/images/member1.webp';
import member2 from '../assets/images/member2.webp';
import member3 from '../assets/images/member3.webp';
import member4 from '../assets/images/member4.webp';
import member5 from '../assets/images/member5.webp';
import member6 from '../assets/images/member6.webp';

import linkedIn from '../assets/images/contactLinkedIn.svg';
import twitter from '../assets/images/contactTwitter.svg';
import instagram from '../assets/images/contactInsta.svg';

const TeamMemberProfile = () => {
  const { memberName } = useParams();

  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: " About Sara Jessica",
      slug: "sara-jessica",
      position: "Chief Executive Officer",
      image: member1,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. Enim in eros elementum tristique.",
      about: [
        "Proin sed libero enim sed faucibus turpis in. Nisi est sit amet facilisis. Venenatis cras sed felis eget velit. A erat nam at lectus urna duis convallis. Cras ornare arcu dui vivamus arcu felis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
        "Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Et netus et malesuada fames. Vel orci porta non pulvinar neque laoreet suspendisse. Malesuada fames ac turpis egestas maecenas pharetra convallis."
      ],
      experience: [
        {
          title: "Background Experience",
          description: "Lorem ipsum dolor sit amet consectetur. Massa gravida tellus ultrices nunc phasellus sed. Scelerisque convallis in lacus at a dictum consectetur dignissim. Ut eget sit cras justo cursus non purus dignissim. Bibendum lectus urna malesuada molestie diam ultrices. Sem malesuada curabitur molestie orci quis ullamcorper sem odio. Sit quis sed mauris enim.Nisl fermentum diam morbi nunc eu. Imperdiet nunc in faucibus fusce. Elementum leo urna."
        }
      ],
      highlights: [
        "Sem malesuada curabitur molestie orci quis ullamcorper sem odio.",
        "Morbi nunc eu Imperdiet nunc in faucibus fusce.",
        "Bibendum lectus urna malesuada molestie diam ultrices."
      ],
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/", icon: linkedIn },
        { name: "Twitter", url: "https://www.x.com/", icon: twitter },
        { name: "Instagram", url: "https://instagram.com/", icon: instagram }
      ]
    },
    // Add other team members here with the same structure
    {
      id: 2,
      name: "John Doe",
      slug: "john-doe",
      position: "CTO",
      image: member2,
      bio: "Technology leader with 10+ years of experience in software development.",
      about: [
        "Expert in building scalable systems and leading engineering teams.",
        "Passionate about creating innovative solutions to complex problems."
      ],
      experience: [
        {
          title: "Background Experience",
          description: "Previously led engineering at multiple startups. Specialized in cloud architecture and distributed systems."
        }
      ],
      highlights: [
        "Built systems handling millions of users",
        "Open source contributor",
        "Speaker at major tech conferences"
      ],
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/", icon: linkedIn },
        { name: "Twitter", url: "https://www.x.com/", icon: twitter }
      ]
    }
  ];

  const member = teamMembers.find(m => m.slug === memberName);

  if (!member) {
    return <div className="text-center py-20">Team member not found</div>;
  }

  return (
    <div className="bg-white">
     

      {/* Hero Section */}
      <header className="section-team-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="team-hero-component bg-backgroundColor rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="team-hero-image-wrap w-full md:w-2/5">
              <motion.img
                src={member.image}
                alt={member.name}
                className="team-hero-image w-full h-auto rounded-2xl object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="team-name text-3xl md:text-[48px] font-medium text-textColor mb-2 tracking-tight">
                  {member.name}
                </h1>
                <div className="spacer-xsmall h-2"></div>
                <div className=" text-xl md:text-2xl text-secondaryTextColor font-normal">
                  {member.position}
                </div>
                <div className="spacer-small h-4"></div>
                <div className="spacer-xsmall h-2"></div>
                <div>
                  <p className="text-lg font-normal tracking-tight leading-wider text-secondaryTextColor">
                    {member.bio}
                  </p>
                </div>
                <div className="spacer-xsmall h-2"></div>
                <div className="spacer-small h-4"></div>
                
                <div className=" flex gap-4">
                  {member.socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className=" hover:opacity-80 transition-opacity "
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name} 
                        className=" w-8 h-8"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="section-team-info py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="team-info-wrap mb-12">
            <div className="heading-wrap flex items-center gap-2 mb-6">
             
              <h2 className="text-size-large text-2xl font-bold text-gray-900">
                {member.name}
              </h2>
            </div>
            
            <div className="team-info">
              <div className="team-info-rt space-y-4 text-lg text-gray-700">
                {member.about.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          <div className="spacer-medium h-8"></div>
          <div className="spacer-xsmall h-2"></div>

          {/* Experience Section */}
          <div className="team-info-wrap">
            <div className="heading-wrap mb-6">
              <h2 className="text-size-large text-2xl font-bold text-gray-900">
                Background Experience
              </h2>
            </div>
            
            <div className="team-info">
              <div className="team-info-rt space-y-6 text-lg text-gray-700">
                {member.experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <p>{item.description}</p>
                  </motion.div>
                ))}
                
                <ul className="list-disc pl-6 space-y-2">
                  {member.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberProfile;