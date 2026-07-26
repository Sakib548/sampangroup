import { Stat } from "@/types/Stat";
import { stats } from "../data/stats";

export default function Counter() {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center">
          <h1>Our Impact</h1>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p>
                {stat.value}
                {stat.suffix}
              </p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
