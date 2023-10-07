import { Pause, Play } from "@icons"

interface PlayButtonCardProps {
  playlistId: string
}

export function PlayButtonCard ({
  playlistId,
}: PlayButtonCardProps): JSX.Element {
  return (
    <div className="card-play-button rounded-full bg-green-500 p-4">
      <Play />
    </div>
  )
}
