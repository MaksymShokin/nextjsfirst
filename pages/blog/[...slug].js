import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();

  const slug = router.query.slug; //array

  return (
    <div>
      <h1>This is ClientsProjectPage</h1>
    </div>
  );
};

export default ProjectPage;
