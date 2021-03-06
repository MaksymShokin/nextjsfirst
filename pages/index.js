import Link from 'next/link';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();
  const clients = [
    {
      name: 'Max',
      id: 'max'
    },
    {
      name: 'Lol',
      id: 'lol'
    }
  ];

  const navigateToClients = () => {
    setTimeout(() => {
      router.push('/clients');
    }, 1000);
  };

  return (
    <div>
      <h1>This is home page</h1>
      <Link href='portfolio'>Link to portfolio</Link>
      <br />
      <Link replace href='clients'>
        Link to clients
      </Link>

      {clients.map(({ name, id }) => (
        <>
          <br />
          <Link
            href={{
              pathname: 'clients/[id]',
              query: {
                id: id
              }
            }}
          >
            {name}
          </Link>
          <br />
        </>
      ))}

      <button onClick={navigateToClients}>Go to client in 1 sec</button>
    </div>
  );
};

export default HomePage;
