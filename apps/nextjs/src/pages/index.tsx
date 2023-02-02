import { NextPage } from 'next';

import { NavigationMenuDemo } from '~/components/NavigationMenuDemo';
import { GenericLayout } from '~/layouts/generic-layout';

const Home: NextPage = () => {
  return (
    <>
      <GenericLayout className="bg-gray-900 text-white font-roboto">
        <NavigationMenuDemo />

        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Gamefy</h2>
          <p className="mt-4 text-gray-300">Here we gamefy our shit</p>
        </div>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Kickstart your marketing
              </h2>

              <p className="mt-4 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae
                aperiam fugit consequuntur saepe laborum.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Digital campaigns
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
              >
                <span className="text-sm font-medium"> Get Started </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                alias doloribus impedit.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt="Party"
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-16">
                <article className="space-y-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut qui hic atque tenetur quis eius quos ea neque sunt,
                    accusantium soluta minus veniam tempora deserunt? Molestiae
                    eius quidem quam repellat.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum explicabo quidem voluptatum voluptas illo
                    accusantium ipsam quis, vel mollitia? Vel provident culpa
                    dignissimos possimus, perferendis consectetur odit
                    accusantium dolorem amet voluptates aliquid, ducimus tempore
                    incidunt quas. Veritatis molestias tempora distinctio
                    voluptates sint! Itaque quasi corrupti, sequi quo odit illum
                    impedit!
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </GenericLayout>
    </>
  );
};

export default Home;
