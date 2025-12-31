import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Oswald } from "next/font/google";

const myFont = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function HeroSection() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="min-h-screen overflow-hidden relative py-20">
        <div className="mx-auto max-w-7xl relative z-20 px-6">
          <div className="relative ">
            <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">
              {currentYear}
            </p>
            <h1
              className={`${myFont.className} z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]`}
            >
              FRONTEND DEVELOPER
            </h1>
            <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px]">
              GILANG
            </p>
          </div>

          <div className="grid relative">
            <div className="space-y-8 pt-20 flex gap-6 justify-center">
              <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
                <div className="font-semibold text-xl">
                  <div>/ WEB DESIGN (UX/UI)</div>
                  <div>/ WEB DEVELOPMENT</div>
                </div>
                <div className="absolute hidden md:flex left-1/2 -top-2 w-fit overflow-hidden bg-secondary">
                  <img
                    src="/assets/myFolio/ai.jpg"
                    alt="Designer portrait"
                    className="h-100 w-full object-contain grayscale"
                  />
                  <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                    BASED IN INDONESIA
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-secondary">
              <img
                src="/assets/myFolio/ai.jpg"
                alt="Designer portrait"
                className="h-100 w-full object-contain grayscale"
              />
              <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                BASED IN INDONESIA
              </div>
            </div>
          </div>

          <div className="md:mt-56 mt-10">
            <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
              I'M EXPERIENCED WEB AND UX/UI DESIGNER,
              <br />
              WHO DESIGN MEMORABLE WEB EXPERIENCES FOR
              <br />
              BRANDS OF ALL USERS
            </p>
          </div>
        </div>
        <div
          className="absolute block dark:hidden inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 80%, transparent 100%)
      `,
            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 80%, transparent 100%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        <div
          className="absolute hidden dark:block inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </section>
      <section className="bg-background pb-10 md:pb-10">
        <div className="group relative m-auto max-w-6xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm">Powering Skill</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={30}>
                {/* React */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 18.1778L4.665 21.5L6 14.4778L0 9.12222L7.3325 8.25555L12 2L16.6675 8.25555L24 9.12222L18 14.4778L19.335 21.5L12 18.1778Z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      React
                    </span>
                  </div>
                </div>

                {/* Next.js */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M12 6L8 12l4 6 4-6-4-6z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Next.js
                    </span>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M7 9l5 5 5-5H7z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Tailwind
                    </span>
                  </div>
                </div>

                {/* Vercel */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 22h20L12 2zm0 4.5l7.5 13.5H4.5L12 6.5z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Vercel
                    </span>
                  </div>
                </div>

                {/* Git */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm7-7h-2V7h2v3zm0 4h-2v-3h2v3z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Git
                    </span>
                  </div>
                </div>

                {/* shadcn/ui */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="9"
                        y1="9"
                        x2="15"
                        y2="15"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="15"
                        y1="9"
                        x2="9"
                        y2="15"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      shadcn/ui
                    </span>
                  </div>
                </div>

                {/* Redux */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Redux
                    </span>
                  </div>
                </div>

                {/* Zustand */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l5-5-5-5v10z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Zustand
                    </span>
                  </div>
                </div>

                {/* Framer Motion */}
                <div className="flex">
                  <div className="mx-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black flex items-center gap-2 min-h-11 min-w-30 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4l4 4-4-4z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Framer
                    </span>
                  </div>
                </div>
              </InfiniteSlider>

              <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
