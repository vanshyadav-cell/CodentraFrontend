import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  slug,
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-700
      bg-slate-900
      p-8
      transition-all
      
      duration-500
      hover:-translate-y-2
      hover:border-green-400
      hover:shadow-2xl
      "
    >
      {/* Top Gradient Line */}
      <div
        className="
        absolute
        left-0
        top-0
        h-1
        w-full
        bg-gradient-to-r
        from-blue-400
        to-green-400
        scale-x-0
        origin-left
        transition-transform
        duration-500
        group-hover:scale-x-100
        "
      />

      {/* Icon */}
      <div
        className="
        mb-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-slate-800
        text-green-400
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-6
        "
      >
        <Icon size={30} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3
        className="
        text-2xl
        font-semibold
        text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
        mt-4
        leading-7
        text-white
        "
      >
        {description}
      </p>

      {/* Features */}
      <div className="mt-8 space-y-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            {/*checksign*/}
            <div
              className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-transparent
              text-green-400
              border
              border-green-400
              "
            >
              <Check size={14} />
            </div>

            <span className="text-gray-400">
              {feature}
            </span>
            
          </div>
        ))}
      </div>
      

      {/* Learn More */}
      <Link
        to={`/services/${slug}`}
        className="inline-flex items-center gap-2 text-blue-500 hover:text-green-400 transition-colors pt-5"
      >
        Learn More
        <ArrowRight size={18} />
      </Link>



    </div>
  );
}

export default ServiceCard;