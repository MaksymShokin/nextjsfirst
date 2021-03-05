import Link from 'next/link';

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
