import { NextPage } from 'next';
import Link from 'next/link';

import { Card } from '~/components/Card';
import { Carousel } from '~/components/Carousel';
import { Footer } from '~/components/Footer';
import { Panel } from '~/components/Panel';
import { GenericLayout } from '~/layouts/generic-layout';

const Home: NextPage = () => {
  return (
    <>
      <GenericLayout className="bg-gray-900 text-white font-roboto">
        <section id="inscreva-se" className="w-screen h-screen">
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
              <div className="lg:w-full w-full h-full flex justify-center">
                <Panel />
              </div>
              <div className="w-1/2 h-screen lg:hidden hidden">
                <Carousel />
              </div>
            </div>
          </main>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Gamificação fácil e rápida
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card
                title="Criação de Missões"
                description="Com a possibilidade de criar missões para seus jogadores, você
                  pode incentivar a participação e aumentar a fidelidade."
              />
              <Card
                title="Ranking dos Jogadores"
                description="Com o sistema de pontos e ranking, você pode ver quem são seus
                  jogadores mais engajados e destacados na empresa."
              />
              <Card
                title="Dashboard de Indicadores"
                description="Um painel intuitivo para acompanhar o progresso e o impacto
                  das suas campanhas de gamificação."
              />
              <Card
                title="Recompensas Personalizadas"
                description="Ofereça recompensas exclusivas para os jogadores mais bem
                  classificados e incentive a participação e a fidelização."
              />
              <Card
                title="Integração Fácil"
                description="Nossa plataforma é fácil de integrar e usar, sem a necessidade
                  de conhecimentos técnicos."
              />
              <Card
                title="Suporte de Qualidade"
                description="Nós fornecemos suporte de qualidade para garantir que sua
                  jornada de gamificação seja suave e bem-sucedida."
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#inscreva-se"
                className="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
              >
                <span className="text-sm font-medium"> Inscreva-se </span>

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
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </GenericLayout>
    </>
  );
};

export default Home;
