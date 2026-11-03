function StoryStats({ value, label }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-blue-100
        bg-white
        px-6
        py-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-400
        hover:shadow-lg
      "
    >
      {/* Stat Value */}
      <h3
        className="
          text-3xl
          font-bold
          text-blue-600
        "
      >
        {value}
      </h3>

      {/* Divider */}
      <div
        className="
          my-3
          h-px
          w-12
          bg-blue-100
        "
      />

      {/* Label */}
      <p
        className="
          text-center
          text-sm
          font-medium
          leading-relaxed
          text-slate-600
        "
      >
        {label}
      </p>
    </div>
  );
}

export default StoryStats;