import { useState } from "react";
import { Check } from "lucide-react";
import { enquiryCategories } from "../data/content";

export default function EnquiryForm({ defaultCategory }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-sm border border-leaf/25 bg-leaf/[0.06] p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-paper">
          <Check size={20} />
        </span>
        <h3 className="font-display text-xl text-primary">Enquiry sent</h3>
        <p className="text-sm leading-relaxed text-ink-soft">
          Thank you — we've received your enquiry and will respond within two
          working days.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full border border-line bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-colors focus:border-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
            Email address
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-primary">
          Enquiry type
        </label>
        <select
          id="category"
          name="category"
          defaultValue={defaultCategory || enquiryCategories[enquiryCategories.length - 1]}
          className={inputClasses}
        >
          {enquiryCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-secondary px-6 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-secondary-light"
      >
        Send enquiry
      </button>
    </form>
  );
}
