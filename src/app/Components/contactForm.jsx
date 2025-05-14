// components/QuoteForm.tsx
import Image from 'next/image';

const QuoteForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Form Section - Left Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative bg-[#121212] p-6 md:p-10 rounded-lg shadow-md overflow-hidden h-full">
            <div className="absolute top-1/2 left-1/2 w-120 h-120 bg-[#7AE8FF] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="relative z-10 max-w-md mx-auto lg:mx-0">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                Stay Updated 
              </h2>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
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

                <input 
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                />

                <div className="flex flex-col sm:flex-row gap-4">
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

                <textarea
                  placeholder="Your Message*"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2"
                />

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
        <div className="w-full lg:w-1/2 relative h-64 sm:h-96 lg:h-auto mt-8 lg:mt-0">
          <Image
            src="/images/froming.png" // Use your local image path
            alt="What we can do for you"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
