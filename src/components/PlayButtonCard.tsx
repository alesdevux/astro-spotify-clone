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

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === playlistId

  const handlePlay = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }
    
    fetch(`/api/get-info-playlist.json?id=${playlistId}`)
      .then(res => res.json())
      .then(data => {
        const { playlist, songs } = data

        setIsPlaying(true)
        setCurrentMusic({
          playlist,
          songs,
          song: songs[0],
        })
      })
  }

  return (
    <button onClick={handlePlay} className="card-play-button rounded-full bg-green-500 p-4">
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
