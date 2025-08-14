  
export default function Brand() {   
     return(
        <div className="bg-[#004996] text-white py-5 px-6 text-center">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Ready to Make Your Brand the Main Act?
      </h2>

      {/* Underline SVG / Wave Line */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 10"
        className="mx-auto mb-6 w-40"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <path d="M0 5 Q50 0 100 5 T200 5" />
      </svg>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-3">
        At Ayati Works, we don’t follow trends; we set them. If you’re ready to
        turn your brand into the next big thing, we’re ready to make it happen.
      </p>

      {/* Small Line */}
      <p className="mb-3">Next is Now. I</p>

      {/* Last Line */}
      <p className="text-sm md:text-base">
        Let’s make your brand impossible to ignore.
      </p>
    </div>
  );
}