import Head from "next/head";
import NavBar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/litera/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
