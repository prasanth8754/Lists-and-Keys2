import {AiOutlineDelete} from 'react-icons/ai'
import {ListCont, ImgCont, Img, Para, Button} from './styledComponents'

const SongItem = props => {
  const {songDetails, onDeleteSongItem} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const deleteSongItem = () => {
    onDeleteSongItem(id)
  }

  return (
    <ListCont>
      <ImgCont>
        <Img src={imageUrl} alt="track" />
        <div>
          <Para>{name}</Para>
          <Para genre>{genre}</Para>
        </div>
      </ImgCont>
      <ImgCont>
        <Para>{duration}</Para>
        <Button type="button" onClick={deleteSongItem} data-testid="delete">
          <AiOutlineDelete />
        </Button>
      </ImgCont>
    </ListCont>
  )
}

export default SongItem
