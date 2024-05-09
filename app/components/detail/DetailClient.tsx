"use client"

import PageContainer from "../containers/PageContainer"

export default function DetailClient({product}:{product:any}) {
    return(
        <div className="py-10">
            <PageContainer>
                {product?.name}
            </PageContainer>
        </div>
    )
}