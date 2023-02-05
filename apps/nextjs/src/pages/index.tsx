import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from '~/components/Carousel';
import { Footer } from '~/components/Footer';
import { Panel } from '~/components/Panel';
import { GenericLayout } from '~/layouts/generic-layout';

const Home: NextPage = () => {
  return (
    <>
      <GenericLayout className="bg-gray-900 text-white font-roboto">
        <section className="w-screen h-screen">
          <header className="w-full h-20 z-20 bg-gray-900 backdrop-blur-2xl relative lg:absolute">
            <div className=" relative z-20 max-w-7xl mx-auto flex h-full px-10 xl:px-5 justify-between items-center">
              <a href="#_">
                <svg
                  className="w-7 h-7 fill-current tails-selected-element"
                  viewBox="0 0 39 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.252 1.152C4.184 2.526.454 6.918.061 14.329c1.963-4.049 4.798-5.975 8.503-5.778 2.115.112 3.84 1.295 5.75 2.603 3.11 2.133 6.712 4.601 13.281 3.324 7.068-1.374 10.798-5.766 11.191-13.177-1.963 4.049-4.798 5.975-8.503 5.779-2.115-.113-3.84-1.296-5.75-2.604-3.11-2.133-6.712-4.601-13.281-3.324z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="flex items-center justify-between">
                <ul className="sm:flex hidden space-x-8 mr-10 pr-10 border-r border-gray-200 text-sm font-medium">
                  <li>
                    <Link href="/" className="hover:text-pink-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-pink-500">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-pink-500">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-pink-500">
                      Login
                    </Link>
                  </li>
                </ul>
                <div className="w-auto sm:hidden block mr-3">
                  <button className="w-auto h-full rounded-md hover:bg-gray-100 p-2.5 text-gray-400 hover:text-pink-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-sm font-bold bg-white flex-shrink-0 rounded-full relative cursor-pointer">
                  <button className="rounded border-pink-600 bg-pink-600 px-4 font-medium text-sm text-white flex items-center flex-shrink-0 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-2.5">
                    Get Notified
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="w-screen h-screen bg-gray-900 lg:overflow-hidden">
            <div className="w-full relative lg:h-screen lg:pt-0 pt-32 flex">
              <div className="lg:w-1/2 w-full h-full flex justify-end">
                <Panel />
              </div>
              <div className="w-1/2 h-screen lg:block hidden">
                <Carousel />
              </div>
            </div>
          </main>
        </section>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                <Image
                  src={
                    'https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                  }
                  alt="Party"
                  fill={true}
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

        <Footer />
      </GenericLayout>
    </>
  );
};

export default Home;
