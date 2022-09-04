import { NextPage } from "next";
import Head from "next/head";

const CartPage: NextPage = () =>{
    return (
        <>
            <Head>
                <title>Box Cart</title>
                <meta name="description" content="items cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main>

                <div>
                    Cart Page
                </div>
            </main>
        </>
    )
}

export default CartPage;