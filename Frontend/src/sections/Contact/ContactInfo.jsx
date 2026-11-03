import { contactInfo } from "./ContactData";
import ContactCard from "./ContactCard";

function ContactInfo() {
  return (
    <div className="max-w-xl">

      {/* Small Badge */}
      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-green-400
          bg-transparent
          px-4
          py-2
          text-sm
          font-medium
          text-blue-600
          mb-6
        "
      >
        Contact Information
      </div>

      {/* Heading */}
      <h2
        className="
          text-4xl
          lg:text-5xl
          font-bold
          tracking-tight
          text-white
          leading-tight
        "
      >
        Let's Start a
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          {" "}Conversation
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
      >
        Whether you're planning a new digital product, scaling your
        business, or simply exploring ideas, we'd love to hear from
        you. Reach out through any of the channels below or send us
        a message using the contact form.
      </p>

      {/* Cards */}
      <div className="mt-7 space-y-4">
        {contactInfo.map((item) => (
          <ContactCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            value={item.value}
            link={item.link}
          />
        ))}
      </div>

    </div>
  );
}

export default ContactInfo;