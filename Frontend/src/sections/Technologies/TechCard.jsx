function TechCard({ technology }) {
  const Icon = technology.icon;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-400/70
        hover:shadow-lg
        hover:shadow-emerald-500/10
      "
    >
      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-slate-800
          transition-colors
          duration-300
          group-hover:bg-slate-700
        "
      >
        <Icon
          size={28}
          className={technology.color}
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        {technology.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          text-sm
          leading-7
          text-slate-400
        "
      >
        {technology.description}
      </p>
    </div>
  );
}

export default TechCard;