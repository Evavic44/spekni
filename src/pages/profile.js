import prisma from "../prisma";

export default function Profile() {
  return <div></div>;
}

export async function getServerSideProps({ query }) {
  console.log("Params: ", query);
  const user = await prisma.profile.findUnique({ where: { email: query.useremail }, select: { username: true }});
  console.log("User: ", user);
  
  try {
    return {
      redirect: {
        permanent: false,
        destination: `/${user.username}`
      },
    };
  } catch (e) {
    console.error('uh oh');
  }
}