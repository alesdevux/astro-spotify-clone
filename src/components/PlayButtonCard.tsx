import { Pause, Play } from "@icons"
import { playlists } from "@lib/data";
import { usePlayerStore } from "@store/playerStore";

interface PlayButtonCardProps {
  playlistId: string
}

export function PlayButtonCard ({
  playlistId,
}: PlayButtonCardProps): JSX.Element {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const handlePlay = () => {
    setCurrentMusic({
      playlist: {
        id: playlistId,
        albumId: Number(playlistId),
        title: playlists[Number(playlistId)].title,
        color: playlists[Number(playlistId)].color,
        cover: playlists[Number(playlistId)].cover,
        artists: playlists[Number(playlistId)].artists,
      },
      song: null,
      songs: [],
    })
    setIsPlaying(!isPlaying)
  }

  const isPlayingPlaylist = currentMusic?.playlist?.id === playlistId

  return (
    <button onClick={handlePlay} className="card-play-button rounded-full bg-green-500 p-4">
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
