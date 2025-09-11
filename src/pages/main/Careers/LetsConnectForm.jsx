// LetsConnectForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

export default function LetsConnectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data) => {
    // TODO: replace with your API call
    await new Promise((r) => setTimeout(r, 700));
    console.log("Form:", data);
    reset();
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-md px-4 py-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-sky-700">
          Let’s Connect
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Your Goal and Our Expertise!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 text-left">
          {/* Name */}
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Name"
              aria-invalid={!!errors.name}
              className="peer block w-full rounded-lg border border-sky-400/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              {...register("name", { required: "Please enter your name" })}
            />
            {/* Decorative chevron (as in screenshot) */}
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sky-600 peer-focus:text-sky-700"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.1 1.02l-4.25 4.5a.75.75 0 01-1.1 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>
          )}

          {/* Email */}
          <label className="mb-2 mt-5 block text-sm font-semibold text-slate-800">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            aria-invalid={!!errors.email}
            className="block w-full rounded-lg border border-sky-400/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
          )}

          {/* Message */}
          <label className="mb-2 mt-5 block text-sm font-semibold text-slate-800">
            Message
          </label>
          <textarea
            placeholder="Describe yourself here..."
            rows={5}
            aria-invalid={!!errors.message}
            className="block w-full resize-y rounded-lg border border-sky-400/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("message", {
              required: "Please enter a short message",
              minLength: { value: 10, message: "At least 10 characters" },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600">
              {errors.message.message}
            </p>
          )}

          {/* Submit */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-sky-300/40 transition hover:bg-sky-700 disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Simple success note (optional) */}
          {isSubmitSuccessful && (
            <p className="mt-3 text-center text-xs text-emerald-600">
              Thanks! We’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
