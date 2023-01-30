import React from 'react'
import MediaGenre from '../../components/Business/MediaGenre/MediaGenre'
import { MEDIA_TYPE } from '../../utils/constants'

const Discover = () => {
  return (
    <div>
      <MediaGenre type={MEDIA_TYPE.MOVIE} title="Movie" />
      <MediaGenre type={MEDIA_TYPE.TV_SERIES} title="Tv" />
    </div>
  )
}

export default Discover
