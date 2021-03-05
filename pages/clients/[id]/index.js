import { useRouter } from 'next/router';

const ClientsIdPage = () => {
  const router = useRouter();

  const id = router.query.id;

  return (
    <div>
      <h1>This is ClientsIdPage</h1>
    </div>
  );
};

export default ClientsIdPage;
