import { stats } from "../constant/stats";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex h-35 w-full max-w-xs flex-col gap-y-4 bg-gray-100 rounded-lg p-6 lg:h-35 lg:w-70"
            >
              <dt className="text-base text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.scale}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
