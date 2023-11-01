import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || user.id) redirect('/auth-callback?origin=/dashboard');

  return (
    <div>
      <h1>dashboard</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Page;
