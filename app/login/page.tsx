import { getCurrentUser } from "../actions/getCurrentUser";
import LoginClient from "../components/auth/LoginClient";

export default async function Login() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <LoginClient currentUser={currentUser} />
    </div>
  );
}
