import { Pause, Play } from "@icons"
import { usePlayerStore } from "@store/playerStore";

interface PlayButtonCardProps {
  playlistId: string
}

export function PlayButtonCard ({
  playlistId,
}: PlayButtonCardProps): JSX.Element {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <button onClick={handlePlay} className="card-play-button rounded-full bg-green-500 p-4">
      {isPlaying ? <Pause /> : <Play />}
    </button>
  )
}
