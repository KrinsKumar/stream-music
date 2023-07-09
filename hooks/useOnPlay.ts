import { on } from "events";
import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import { useUser } from "./useUser";

import { Song } from "@/types";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    const onPlay = (id: string) => {
        if (!user) return authModal.onOpen();

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }

    return onPlay;
}

export default useOnPlay;