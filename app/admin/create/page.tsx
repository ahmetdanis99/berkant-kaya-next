import { getCurrentUser } from "@/app/actions/getCurrentUser";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/warningText";

export default async function CreateProduct() {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
        <WarningText text="Giriş İzniniz Yok" />
    );
  }

  return (
    <AuthContainer>
        <CreateForm/>
    </AuthContainer>
  );
}
