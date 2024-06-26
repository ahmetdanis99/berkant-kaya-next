import React from "react";

export default function PageContainer({children}:{children:React.ReactNode}) {
    return(
        <div className="px-3 md:px-10">{children}</div>
    )
}