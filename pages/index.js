import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link href='portfolio'>Link to portfolio</Link>
      <br/>
      <Link replace href='clients'>
        Link to clients
      </Link>
    </div>
  );
};

export default HomePage;
