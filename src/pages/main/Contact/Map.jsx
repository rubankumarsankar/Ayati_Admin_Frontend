export default function Map() {
  return (
    <div className="py-12 px-6 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#17A3DC] mb-8">
        Join the Bandwagon of Ayati’s Growth Partners
      </h2>

      {/* Map Container */}
      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Ayati Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.625!2d-73.8617!3d40.7162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f1b!2sForest%20Hills%2C%20NY!5e0!3m2!1sen!2sus!4v1691412345678"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
