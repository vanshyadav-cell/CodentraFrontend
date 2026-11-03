import { ArrowRight } from "lucide-react";
import StoryStats from "./StoryStats";
import { Link } from "react-router-dom";
function StoryCard({ story, featured = false }) {
  return (
    <article
      className={`
        group
        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-400
        hover:shadow-xl
        ${
          featured
            ? "grid gap-10 p-5 lg:grid-cols-[1.6fr_0.7fr]"
            : "flex flex-col p-6"
        }
      `}
    >
      {/* Left Content */}
      <div className="flex flex-col">
        {/* Company + Industry */}
        <div className=" flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-lg
              font-bold
              text-blue-600
            "
          >
            {story.company.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-white">
              {story.company}
            </p>

            <p className="text-sm text-slate-400">
              {story.industry}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`
            font-semibold
            text-slate-900
            ${
              featured
                ? "text-3xl"
                : "text-xl"
            }
          `}
        >
          {story.title}
        </h3>

        {/* Description */}
        <p
          className="
            
            leading-7
            text-slate-400
          "
        >
          {story.description}
        </p>

        {/* Result */}
        <div
          className="
            mt-6
            rounded-2xl
            border-l-4
            border-blue-400
            bg-blue-50
            p-4
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-slate-700
            "
          >
            {story.result}
          </p>
        </div>

        {/* Technology Tags */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-3
          "
        >
          {story.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Read Story */}
        <Link
  to={`/stories/${story.id}`}
  className="inline-flex items-center gap-2 mt-8 text-blue-400 font-medium hover:text-green-400 transition"
>
  Read Story
  <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
</Link>
          
      </div>

      {/* Right Side Stats (Only Featured Card) */}
      {featured && (
        <div
          className="
            flex
            items-center
            justify-center
          "
        >
          <StoryStats
            value={story.stats.value}
            label={story.stats.label}
          />
        </div>
      )}
    </article>
  );
}

export default StoryCard;