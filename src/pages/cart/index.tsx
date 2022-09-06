import { NextPage } from "next";
import Head from "next/head";

import { trpc } from "@/utils/trpc";

import { Dashboard } from "@/components/Dashboard";

const CartPage: NextPage = () => {
  
  const { data, refetch, isLoading } = trpc.useQuery(["items.getAll"], {
    enabled: true,
  });

  const formatedData = data?.filter((item) => !!item.isOnCart);

  function handleRefetch() {
    refetch();
  }

  return (
    <>
      <Head>
        <title>Box Cart</title>
        <meta name="description" content="main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl leading-normal font-extrabold text-blue-300 ">
          Box Cart
        </h2>
      </header>

      <main className="mx-auto max-w-[1100px] flex flex-col items-center">
        <Dashboard isLoading={isLoading} itemsData={formatedData} refetch={handleRefetch} />
      </main>
    </>
  );
};

export default CartPage;
