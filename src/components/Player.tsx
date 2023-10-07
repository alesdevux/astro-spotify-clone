import { Pause, Play } from "@icons"
import { usePlayerStore } from "@store/playerStore"
import { useEffect, useRef } from "react"

export function Player (): JSX.Element {
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(state => state)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song, playlist, songs } = currentMusic

    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`
      audioRef.current?.setAttribute("src", src)
      audioRef.current?.play()
    }
  }, [currentMusic])

  const handlePlay = () => setIsPlaying(!isPlaying)

  return (
    <div className="flex items-center justify-between w-full px-4 z-50">
      <section>
        <h3 className="text-xl pt-10 pb-6 font-bold">Current Song...</h3>
      </section>
      <section className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-3 text-zinc-900" onClick={handlePlay}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </section>
      <section className="grid place-content-center">
        <h3 className="text-xl pt-10 pb-6 font-bold">Volume</h3>
      </section>

      <audio ref={audioRef} />
    </div>
  )
}
