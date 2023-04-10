import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handlerClick = () => { 
    console.log("Place Order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Product</Link>
      <button onClick={handlerClick}>
        Place Order
      </button>
    </div>
  );
}

export default Home;
