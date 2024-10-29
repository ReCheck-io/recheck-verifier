import { TIMELINE_DATA } from "@/constants";

export default function Timeline() {
  return (
    <div className="hidden w-1/2 flex-1 items-center justify-center lg:flex">
      <nav aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden"
          style={{ counterReset: "test" }}
        >
          {TIMELINE_DATA.map((data) => (
            <li className="relative pb-10" key={data.title}>
              {TIMELINE_DATA.at(-1)?.title !== data.title && (
                <div
                  className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                  aria-hidden="true"
                />
              )}

              <span className="group relative flex items-start">
                <span className="flex h-9 items-center" aria-hidden="true">
                  <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-primary bg-white">
                    <span
                      className="flex size-5 items-center justify-center text-center font-semibold after:content-[counters(test,'.')]"
                      style={{
                        counterIncrement: "test",
                      }}
                    />
                  </span>
                </span>
                <span className="ml-4 flex min-w-0 flex-col">
                  <span className="text-lg font-medium text-primary">
                    {data.title}
                  </span>
                  <span className="text-md max-w-64 text-gray-500">
                    {data.description}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
