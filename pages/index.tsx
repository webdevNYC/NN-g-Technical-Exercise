import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="NN/g Senior Frontend Developer - Technical Exercise">
    <h1 className='text-2xl'>NN/g Senior Frontend Developer</h1>
    <h3>Technical Exercise</h3>
    <div className="p-10">
      <p className="text-xl">
        Please click on the link below to access the prototype for Course 101. Thank you.
      </p>
      <p className='p-10'>
        <Link href="/course/101">Course 101</Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
