// components/QuoteForm.tsx
import Image from 'next/image';

const QuoteForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Form Section - Left Side with background */}
        <div className="w-full lg:w-1/2 relative h-full">
          {/* Form container with transparent background and centered highlight circle */}
          <div className="relative bg-[#121212] p-6 md:p-10 rounded-lg shadow-md overflow-hidden h-full">
            {/* Centered highlight circle */}
            <div className="absolute top-1/2 left-1/2 w-120 h-120 bg-[#7AE8FF] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Form content */}
            <div className="relative z-10 max-w-md mx-auto lg:mx-0">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                Stay Updated 
              </h2>

              <form className="space-y-4">
                {/* Row 1: First Name + Last Name */}
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Your First Name*"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Your Last Name*"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                  />
                </div>

                {/* Row 2: Email */}
                <input 
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                />

                {/* Row 3: Phone + Postal Code */}
                <div className="flex gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code*"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                  />
                </div>

                {/* Row 4: Message */}
                <textarea
                  placeholder="Your Message*"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2"
                />

                {/* Row 5: Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-md transition duration-200 mt-4"
                  >
                    Get A Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div className="w-full lg:w-1/2 h-full relative">
          <div className="relative w-full h-full">
            <Image
              src="https://via.placeholder.com/500" // Online image link
              alt="What we can do for you"
              layout="intrinsic" 
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
