import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  const locations = [
    {
      city: "Chennai",
      address:
        "18/24, TTK Road, 1st Cross St, Alwarpet, Chennai, Tamil Nadu, India - 600018",
      active: true,
    },
    {
      city: "Gurgaon",
      address:
        "944, 2nd Floor, Sarasvati Vihar, Gurgaon, Haryana, India - 122002",
      active: false,
    },
    {
      city: "Singapore",
      address: "Blk 377 Clementi Avenue 5, #06-312, Singapore - 120377",
      active: false,
    },
    {
      city: "New Zealand",
      address: "11 Awaroa Road, Sunnyvale, Auckland - 0612",
      active: false,
    },
    {
      city: "USA",
      address:
        "Jacob Antony 16, Gramercy Road, Monmouth Junction, New Jersey NJ 0885",
      active: false,
    },
    {
      city: "United Arab Emirates",
      address:
        "BIN SOUGAT PROPERTIES, Flat No. 410, Zulekha Medical Center, Same Building, Near Airport Freezone Metro Station, Dubai",
      active: false,
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className={`rounded-md shadow-md p-6 transition-all duration-300 cursor-pointer group ${
              loc.active
                ? "bg-[#004996] text-white hover:bg-blue-900"
                : "bg-white text-gray-800 border border-gray-100 hover:bg-blue-800 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt
                className={`text-lg transition-colors duration-300 ${
                  loc.active
                    ? "text-white"
                    : "text-gray-700 group-hover:text-white"
                }`}
              />
              <h3 className="font-bold text-lg">{loc.city}</h3>
            </div>
            <p className="text-sm leading-relaxed">{loc.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
