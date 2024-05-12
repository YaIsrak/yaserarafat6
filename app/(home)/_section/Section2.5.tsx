'use client';

import WebDesignCard from "@/app/(portfolio)/_components/WebDesignCard";
import { baseUrl } from "@/lib/utils";
import { WebDesignProps } from "@/type.typing";
import { useEffect, useState } from "react";

export default function Section2Point5() {
    const [datas, setDatas] = useState<WebDesignProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${baseUrl}/api/web-design`)
                .then((res) => res.json())
                .then((res) => setDatas(res))
                .catch((error) => {
                    throw new Error(`failed to fetch data: ${error.message}`);
                })
        }
        fetchData()

    }, [])


    return (
        <section className="">
            <div className="container">
                <h1 className="flex flex-col justify-center text-center text-7xl lg:text-9xl font3 mb-[5vmin]">Web Projects</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                    {datas?.map((data: WebDesignProps) => (
                        <WebDesignCard key={data._id} data={data} />
                    ))}
                </div>
            </div>
        </section>
    )
}


// async function getWebDesignData() {
//     const res = await fetch(`${baseUrl}/api/web-design`)
//         .then((res) => res.json())
//         .catch((error) => {
//             throw new Error(`failed to fetch data: ${error.message}`);
//         });

//     return { res, revalidate: 86400 };
// }

// export const dynamic = 'force-dynamic';