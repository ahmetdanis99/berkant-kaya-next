import { getCurrentUser } from "../actions/getCurrentUser";
import RegisterClient from "../components/auth/RegisterClient";

export default async function Register() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <RegisterClient currentUser={currentUser} />
    </div>
  );
}
