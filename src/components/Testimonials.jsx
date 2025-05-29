import servicesPattern from '../assets/images/bg.svg';
import servicesPattern2 from '../assets/images/backImg.svg';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-primary px-4 py-16 relative overflow-hidden">
      {/* Top Right Decorative Image */}
      <img
        src={servicesPattern}
        alt="servicesImg"
        className="absolute top-0 right-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-black px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-8">
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-[56px] lg:text-5xl font-semibold text-white mb-8 leading-tight max-w-7xl mx-auto">
            What Our Clients Say About Working with Skyrocket Business 
          </h1>
          <p className="md:text-[18px] text-white max-w-2xl mx-auto tracking-tightest mb-8">
            Real words from real businesses. Here's how Skyrocket Business helped them grow, connect, and succeed in the digital space.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c40_testi2.webp" 
                alt="Testimonial Giver" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col">
            <div className="mb-4">
              <img 
                src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/680a66ba288d87f5060adc8e_WEBLogo-1.png" 
                alt="Company Logo" 
                className="h-12 object-contain"
              />
            </div>
            
            <div className="flex-1">
              <p className="text-gray-600 text-lg mb-6 italic">
                "Working with Skyrocket Business was the best decision we made for our company. They made everything so easy—from building our website to helping us get more local customers. We really felt supported every step of the way!"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-medium text-primary">Martha Nielsen,</div>
                <div className="text-gray-600">CEO Mop and Glow Cleaning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Decorative Image */}
      <img
        src={servicesPattern2}
        alt=""
        className="absolute bottom-0 left-0 z-0"
      />
    </div>
  )
}

export default Testimonials;