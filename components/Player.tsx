"use client";

import useGetSongsById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import PlayerContent from './PlayerContent'

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongsById(player.activeId)

    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeId) return null;

    return (
        <div className='fixed bottom-0 bg-black w-full py-2 h-[80px] px-4'>
            <PlayerContent song={song} songUrl={songUrl} key={songUrl} />
        </div>
    )
}

export default Player;