import { allPlaylists, songs as allSongs } from "@lib/data"

type GET = {
  params: {
    id: string
  },
  request: {
    url: string
  }
}

export async function GET({ params, request }: GET) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  })
}