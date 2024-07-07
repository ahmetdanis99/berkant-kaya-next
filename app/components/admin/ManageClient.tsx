"use client";
import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useCallback } from "react";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import toast from "react-hot-toast";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";

interface ManageClientProps {
  products: Product[];
}

export default function ManageClient({ products }: ManageClientProps) {
  const storage = getStorage(firebaseApp);
  const router = useRouter();
  let rows: any = [];
  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        image: product.image,
      };
    });
  }

  let columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name" },
    { field: "price", headerName: "Price" },
    { field: "category", headerName: "Category" },
    { field: "brand", headerName: "Brand" },
    {
      field: "inStock",
      headerName: "Category",
      renderCell: (params) => {
        return <div>{params.row.inStock == true ? "Stockta Mevcut" : "Stockta Mevcut Değil"}</div>;
      },
    },
    {
      field: "actions",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <button onClick={() => handleDelete(params.row.id,params.row.image)} className="mx-4 text-red-500 cursor-pointer">
            Sil
          </button>
        );
      },
    },
  ];

  const handleDelete = useCallback(async (id: string, image: any) => {
    toast.success("Sildirme işlemi icin bekleyiniz");
    const handleDeleteImage = async () => {
      try {
        const imageRef = ref(storage, "xxx");
        await deleteObject(imageRef);
      } catch (error) {
        return console.log(error, " bir hata var zort");
      }
    };
    await handleDeleteImage()
    axios.delete(`/api/product/${id}`)
    .then(()=>{
      toast.success("sildirme islemi basarılı");
      router.refresh();
    }).catch((error:any)=>{
      console.log(error)
    })
  }, []);

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
