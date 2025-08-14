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
    <div className="bg-white py-10 px-4 sm:px-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600">Let’s Connect</h2>
      <p className="text-center text-gray-500 mb-2">Your Goal and Our Expertise!</p>
      <p className="text-center text-gray-700 mb-8">
        Fill out the form below and we’ll respond within one business day.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-blue-500 focus:border-blue-500
 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Mobile No */}
        <div>
          <label className="block font-semibold mb-1">Mobile No</label>
          <input
            type="tel"
            placeholder="Enter Your Mobile No"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            className="w-full border border-blue-500 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Services */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((service, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="accent-blue-600 border border-blue-600 "
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Monthly Budget */}
        <div>
          <label className="block font-semibold mb-1">Monthly Budget</label>
          <select
            {...register("budget", { required: "Monthly budget is required" })}
            className="w-full border border-blue-500 focus:border-blue-500
 rounded-md p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Enter Your Monthly Budget</option>
            <option value="Below $1000">Below $1000</option>
            <option value="$1000 - $5000">$1000 - $5000</option>
            <option value="$5000+">$5000+</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full border border-blue-500 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            placeholder="Describe yourself here..."
            {...register("message", { required: "Message is required" })}
            rows="4"
            className="w-full border border-blue-700 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full shadow-md transition-all"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
