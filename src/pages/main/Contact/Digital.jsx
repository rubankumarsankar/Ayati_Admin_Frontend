export default function Digital() {   
     return(
       <section className="py-12">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-6 gap-6">
      
      {/* Left Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          Step Into Our Digital Studio
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Ayatiworks isn’t just another digital agency, it’s where strategy meets execution. 
          Whether you’re looking to grow, launch, or transform, our team is built to make it happen. 
          Swing by for a conversation, no fluff, just real ideas and smart solutions that move your business forward.
        </p>
      </div>

      {/* Right Availability Card */}
      <div className="bg-[#004996] text-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-64">
        <span className="bg-white text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
          Available
        </span>
        <p className="text-lg font-semibold mb-1">Monday - Friday</p>
        <p className="text-sm">10.00 am - 7.00 pm</p>
      </div>
    </div>
       </section>
        
      );
    }