import type { Song } from "@lib/data"

type CurrentSongProps = Partial<Song>

export function CurrentSong ({
  image,
  title,
  artists
}: CurrentSongProps): JSX.Element {
  let artistsOfPlaylist

  if (artists) {
    artistsOfPlaylist = new Intl.ListFormat('en', {
      style: 'long',
      type: 'conjunction',
    }).format(artists);
  }

  return (
    <section className="flex items-center gap-3 relative overflow-hidden">
      <picture className="w-16 h-16 rounded-md bg-zinc-700 overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </picture>

      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-zinc-400">
          {artistsOfPlaylist}
        </p>
      </div>
    </section>
  )
}
