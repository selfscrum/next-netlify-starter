import Layout from '@components/Layout';
import { getExperienceBaseElements } from '@utils/fakeData';

export default function ExperienceDetails({ experience }) {
  return (
    <Layout>
      <div>
        <h1>{experience.outcome}</h1>
        <p>Object: {experience.object}</p>
        <p>Activity: {experience.activity}</p>
        <p>People: {experience.people}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const baseElements = getExperienceBaseElements();
  const paths = baseElements.map((baseElement) => ({
    params: { id: baseElement.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const baseElements = getExperienceBaseElements();
  const experience = baseElements.find(
    (baseElement) => baseElement.id === parseInt(params.id)
  );

  return { props: { experience } };
}
