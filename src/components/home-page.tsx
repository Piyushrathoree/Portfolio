import HomeHero from "@/components/home-hero";
import HomeBelowFold from "@/components/home-below-fold";
import { GridPattern } from "@/components/magicui/grid-pattern";

export default function HomePage() {
  return (
    <div className="min-h-screenrelative">
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className="absolute inset-0 h-full w-full stroke-neutral-800/30 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
      />

      <div className="max-w-4xl mx-auto px-4 py-24 relative">
        <div className="flex flex-col gap-8 w-full">
          <HomeHero />
          <HomeBelowFold />
        </div>
      </div>
    </div>
  );
}
