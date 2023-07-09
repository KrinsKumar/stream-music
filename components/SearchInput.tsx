"use client"

import qs from "query-string"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce"
import Input from "./Input";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debounceValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debounceValue
        }

        const url = qs.stringifyUrl({
            url: "/search",
            query: query
        })

        router.push(url);
    }, [debounceValue, router])

    return ( 
        <Input 
            placeholder="What do you want to listen?" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
 
export default SearchInput;