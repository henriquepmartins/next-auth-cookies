import { getSession } from "@/app/actions";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium users can access this page</h1>
        <Link href="/profile">
          Go to the profile page to upgrade to premium.
        </Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to the premium page</h1>
      <ul>
        <li>You are a premium user</li>
        <li>You can access premium features</li>
        <li>And more premium features</li>
      </ul>
    </div>
  )
};

export default PremiumPage;
