import { ArrowUpRight } from "lucide-react";

function ContactCard({
  icon: Icon,
  title,
  value,
  link,
}) {
  const isClickable =
    link &&
    link !== "#" &&
    link.trim() !== "";

  const Wrapper = isClickable ? "a" : "div";

  return (
    <Wrapper
      href={isClickable ? link : undefined}
      className="
        group
        flex
        items-start
        gap-4
        rounded-3xl
        border
        border-slate-200
        bg-slate-700/50
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-lg
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-blue-600
          transition-all
          duration-300
          group-hover:bg-gradient-to-r from-blue-400 to-green-400
          group-hover:text-white
        "
      >
        <Icon size={22} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-300">
          {title}
        </p>

        <p
          className="
            mt-1
            text-base
            font-semibold
            leading-relaxed
            text-slate-400
            break-words
          "
        >
          {value}
        </p>
      </div>

      {/* Arrow (Only for clickable cards) */}
      {isClickable && (
        <ArrowUpRight
          size={18}
          className="
            mt-1
            text-slate-300
            transition-all
            duration-300
            group-hover:text-blue-600
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      )}
    </Wrapper>
  );
}

export default ContactCard;