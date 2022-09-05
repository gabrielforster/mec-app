import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "@/utils/trpc";

import { Dashboard } from "@/components/Dashboard";
import { CreateModal } from "@/components/CreateModal";

const Home: NextPage = () => {
  const { data, refetch, isLoading } = trpc.useQuery(["items.getAll"], {
    enabled: true,
  });

  function handleRefetch() {
    refetch();
  }

  return (
    <>
      <Head>
        <title>Box Market</title>
        <meta name="description" content="main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl leading-normal font-extrabold text-blue-300 ">
          Box Market
        </h2>
      </header>

      <main className="mx-auto max-w-[1100px] flex flex-col items-center">
        <CreateModal refetch={handleRefetch} />
        <Dashboard isLoading={isLoading} data={data} refetch={refetch} />
      </main>
    </>
  );
};

export default Home;
