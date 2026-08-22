import Sampan21stCentury from "@/app/projects/Sampan21stCentury/ProjectSection";
import SampanTaj from "@/app/projects/SampanTaj/ProjectSection";
import SampanNiketon from "@/app/projects/SampanNiketon/ProjectSection";
import SampanMetroSquare from "@/app/projects/SampanMetroSquare/ProjectSection";
import SampanHighwayInn from "@/app/projects/SampanHighwayInn/ProjectSection";
import ExpressHighwayInn from "@/app/projects/ExpressHighwayInn/ProjectSection";
import SampanAgroGolfResort from "@/app/projects/SampanAgroGolfResort/ProjectSection";
import SampanAuto from "@/app/projects/SampanAuto/ProjectSection";
import SampanCafeMetro from "@/app/projects/SampanCafeMetro/ProjectSection";

export default function ProjectsSection() {
  return (
    <section className="bg-[#f7f8f5] px-6 py-16 text-[#183b2b] sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ef636b]">
          Our projects
        </p>
        <h2 className="mt-3 text-[clamp(2rem,3vw,3.25rem)] font-semibold tracking-tight">
          Projects taking shape.
        </h2>
      <div className="mt-12">
          <Sampan21stCentury />
          <SampanTaj />
          <SampanNiketon />
          <SampanMetroSquare />
          <SampanHighwayInn />
          <ExpressHighwayInn />
          <SampanAgroGolfResort />
          <SampanAuto />
          <SampanCafeMetro />
        </div>
      </div>
    </section>
  );
}
