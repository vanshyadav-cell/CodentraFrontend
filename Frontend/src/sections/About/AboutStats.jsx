import {
  BriefcaseBusiness,
  Users,
  Award,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: <BriefcaseBusiness size={30} />,
    number: "90+",
    title: "Projects Delivered",
  },
  {
    icon: <Users size={30} />,
    number: "80+",
    title: "Happy Clients",
  },
  {
    icon: <Award size={30} />,
    number: "4+",
    title: "Years Experience",
  },
  {
    icon: <Headphones size={30} />,
    number: "24/7",
    title: "Support Available",
  },
];

function AboutStats() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            p-8
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-emerald-400
          "
        >
          {/* Icon */}

          <div
            className="
              mx-auto
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-slate-800
              
              text-green-400
            "
          >
            {item.icon}
          </div>

          {/* Number */}

          <h3
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            {item.number}
          </h3>

          {/* Title */}

          <p
            className="
              mt-2
              text-blue-600
            "
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;