import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { api } from '~/utils/api';
import { Checkbox } from './Checkbox';

type Inputs = {
  email: string;
  beta: boolean;
};

export function Panel() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      beta: true,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await mutate(data);
  };

  const { mutate } = api.betaSubscriber.create.useMutation({
    async onSuccess() {
      if (getValues('beta')) {
        toast.custom((t) => (
          <div
            className={`dark:bg-pink-500 dark:text-slate-100 px-6 dark:py-4 dark:shadow-md dark:rounded-full`}
          >
            Muito obrigado pelo interesse! Entraremos em contato em breve!
          </div>
        ));
      } else {
        toast.custom((t) => (
          <div className={`bg-white px-6 py-4 shadow-md rounded-full`}>
            Muito obrigado! Entraremos em contato assim que lançarmos o beta!
          </div>
        ));
      }
      reset();
    },
  });

  return (
    <div className="h-full w-full flex flex-col justify-center items-start sm:items-center lg:items-start max-w-2xl mx-auto lg:mx-0 px-8 sm:pl-24 pr-10 space-y-8">
      <div className="relative overflow-hidden z-20 inline-block rounded-full py-1.5 px-5 font-medium text-xs leading-6 bg-gray-100">
        <span className="text-gray-600">Já já estaremos em beta!</span>
        <a
          href="#"
          className="font-semibold bg-pink-500 hover:bg-pink-600 text-white h-full py-0.5 px-3 rounded-full translate-x-2 inline-block"
        >
          <span className="absolute inset-0" aria-hidden="true"></span>
          Saiba mais <span aria-hidden="true">→</span>
        </a>
      </div>
      <h1 className="relative z-20 w-full text-left sm:text-center lg:text-left selection:bg-pink-900">
        <span className="block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
          <span className="block text-white">Transforme sua</span>
          <span className="block relative">
            <span className="bg-gradient-to-r text-pink-500">Empresa</span>
            <span className="relative text-white inline-block">
              <span className="relative z-30">com Gamificação</span>
              <svg
                className="w-full absolute bottom-0 translate-y-2 h-auto stroke-current text-pink-500"
                viewBox="0 0 194 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6c39.898-3.018 133.755-7.244 190 0"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </span>
        </span>
      </h1>
      <p className="text-base selection:bg-pink-900 relative z-20 text-white sm:text-xl lg:text-lg xl:text-xl text-left sm:text-center lg:text-left">
        Eleve o <span className="text-pink-500 font-bold">nível</span> do seu
        négocio com a solução fácil e rápida de gamificação da Ponto.Ação. Crie
        missões, desafios e competições que engajem seus clientes e
        colaboradores.
      </p>
      <form className="w-full" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="z-20 relative sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left w-full">
          <Checkbox
            id="terms"
            {...register('beta')}
            checked={getValues().beta}
            onCheckedChange={(e) => setValue('beta', Boolean(e))}
          />
          <label
            htmlFor="terms"
            className="text-sm ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Por favor, me chame para o beta!
          </label>
        </div>
        <div className="z-20 relative sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left w-full">
          <div className="mt-2 sm:flex">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="space-y-2 w-full">
              <div className="relative group w-full">
                <input
                  id="email"
                  type="email"
                  className="block w-full transition duration-75 caret-pink-500 border border-pink-200 rounded-md shadow-sm transition ease-out duration-500 focus:border-pink-500 focus:ring focus:ring-pink-600 focus:ring-opacity-20 border-slate-300 h-11 pl-4 w-full placeholder:italic placeholder:text-slate-300"
                  placeholder="Coloque seu e-mail aqui"
                  {...register('email', { required: true })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded bg-pink-500 hover:bg-pink-600 px-4 font-medium text-sm py-1 text-white flex sm:ml-3 sm:mt-0 mt-3 sm:w-auto w-full flex justify-center items-center flex-shrink-0 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-2.5"
            >
              Inscreva-se
            </button>
          </div>
          <p className="text-sm text-white">
            Se inscreva para ser notificado sobre o lançamento 🚀🚀
          </p>
        </div>
      </form>
    </div>
  );
}
