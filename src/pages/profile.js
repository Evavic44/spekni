import prisma from "../prisma";

export default function Profile(props) {
  return <div>Sorry an error occured</div>;
}

export async function getServerSideProps({ query }) {
  try {
  const user = await prisma.profile.findUnique({ where: { email: query.useremail }, select: { username: true }});
  if(!user) {
    return {
      redirect: {
        permanent: false,
        destination: `/account`
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: `/${user.username}`
    },
  };
  } catch (e) {
    console.error('uh oh');
    return {
      props: {
        error: e.message
      }
    }
  }
}