import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  const services = [
    "Social Media Marketing",
    "Performance Advertising",
    "SEO and Content Marketing",
    "Multilingual Marketing",
    "Video Creation and Marketing",
    "Influencer Marketing",
    "Website & Landing Pages",
    "Branding & Identity",
    "Programmatic Advertising",
  ];

  return (
    <section className="bg-white section py-16 px-6">
      <div className="section-container max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-center section-title mb-6">
          Let’s Connect
        </h2>
        <p className="text-center text-gray-800 font-secondary text-base mb-8">
          Your Goal and Our Expertise!
        </p>
        <p className="text-center text-gray-800 font-secondary text-base mb-10">
          Fill out the form below and we’ll respond within one business day.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 sm:p-8 shadow-lg border border-gray-100"
        >
          {/* Name */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required..." })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Mobile No */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Mobile No
            </label>
            <input
              type="tel"
              placeholder="Enter Your Mobile No"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number...",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Services */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Services Interested In
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2 p-2 border rounded-lg hover:border-primary cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                    className="accent-primary font-secondary"
                  />
                  <span className="text-gray-700 font-secondary text-base">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Monthly Budget */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Monthly Budget
            </label>
            <select
              {...register("budget", { required: "Monthly budget is required..." })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            >
              <option value="">Select Your Monthly Budget</option>
              <option value="Below $1000">Below $1000</option>
              <option value="$1000 - $5000">$1000 - $5000</option>
              <option value="$5000+">$5000+</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email...",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Message
            </label>
            <textarea
              placeholder="Describe yourself here..."
              {...register("message", { required: "Message is required..." })}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 font-primary text-2xl text-white font-medium px-10 py-3 rounded-full 
              shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
