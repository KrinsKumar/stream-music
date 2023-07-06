import { useSupabaseClient } from "@supabase/auth-helpers-react"

import { Song } from "@/types"

const useLoadImage = (song: Song) => {
    const supaBaseClient = useSupabaseClient();


    if (!song) {
        return null;
    }

    const {data: imageData} = supaBaseClient
        .storage
        .from('images')
        .getPublicUrl(song.image_path)

    return imageData.publicUrl;
};

export default useLoadImage;