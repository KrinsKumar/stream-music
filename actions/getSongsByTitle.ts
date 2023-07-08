import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Song } from "@/types";
import { cookies } from "next/headers";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const {data, error} = await supabase
        .from("songs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getSongsByTitle;
