import StoriesHeader from "./StoriesHeader";
import StoryCard from "./StoryCard";
import storiesData from "./StoriesData";

function Stories() {
    
    const otherStories = storiesData.slice(0);

    return (
        <section
            id="stories"
            className="
        relative
        overflow-hidden
        scroll-mt-20
        bg-[#050816]"
        >

            {/* Background Glow center*/}
            <div
                className="
          absolute
          top-0
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
          pointer-events-none
        "
            />*
            {/* Background Glow corner 
            <div
                className="
          absolute
          -top-24
          -left-24
          h-72
          w-72
          rounded-full
          bg-blue-100
          blur-[120px]
          opacity-50
        "
            />*/}
        {/* bottom right 
            <div
                className="
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-green-100
          blur-[140px]
          opacity-40
        "
            />*/}

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <StoriesHeader />

                
                
                {/*Story Cards*/}
                <div
                    className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
            xl:grid-cols-3
          "
                >
                    {otherStories.map((story) => (
                        <StoryCard
                            key={story.id}
                            story={story}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stories;