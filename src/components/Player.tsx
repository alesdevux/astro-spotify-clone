import { Pause, Play } from "@icons"
import { useEffect, useRef, useState } from "react"

export function Player (): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.src = `/music/1/01.mp3`
  }, [])

  const handlePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) audioRef.current.pause()
    if (!isPlaying) {
      audioRef.current.volume = 0.5
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

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
