import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProducts";
import ManageClient from "@/app/components/admin/ManageClient";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/warningText";

export default async function Manage() {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Giriş İzniniz Yok" />;
  }

  const products = await getProducts({ category: null });

  return (
    <AuthContainer>
        <ManageClient products={products} />
    </AuthContainer>
  );
}
