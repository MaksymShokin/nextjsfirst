import { useRouter } from 'next/router';

const PortfolioPageWith = () => {
  const router = useRouter();

  const id = router.query.id;

  debugger;
  return (
    <div>
      <h1>This is PortfolioPageWith</h1>
    </div>
  );
};

export default PortfolioPageWith;
