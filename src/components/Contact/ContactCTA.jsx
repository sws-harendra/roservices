import { PhoneCall } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-sky-600">
      <div className="max-w-6xl mx-auto px-5 text-center text-white">
        <h2 className="text-4xl font-bold">Need RO Repair Today?</h2>

        <p className="mt-4 text-blue-100">
          Book your service in less than a minute.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300">
          <PhoneCall size={18} />
          Call Now
        </button>
      </div>
    </section>
  );
}
