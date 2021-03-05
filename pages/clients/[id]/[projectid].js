import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();

  const projectid = router.query.projectid;
  const id = router.query.id;

  return (
    <div>
      <h1>This is ClientsProjectPage</h1>
    </div>
  );
};

export default ProjectPage;
