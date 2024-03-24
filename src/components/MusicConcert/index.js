import {Component} from 'react'
import {FiSearch} from 'react-icons/fi'
import SongItem from '../SongItem'
import {
  BgContainer,
  Container,
  Heading,
  SearchCont,
  InputCont,
  SearInput,
  ResultCont,
} from './styledComponents'

class MusicConcert extends Component {
  state = {initialTracksList: [], searchInput: ''}

  componentDidMount() {
    this.getInitialTracksList()
  }

  getInitialTracksList = () => {
    const {initialTracksList} = this.props
    this.setState({initialTracksList})
  }

  onDeleteSongItem = id => {
    const {initialTracksList} = this.state
    this.setState({
      initialTracksList: initialTracksList.filter(
        eachItem => eachItem.id !== id,
      ),
    })
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  filterTrackList = () => {
    const {searchInput, initialTracksList} = this.state
    return initialTracksList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {searchInput} = this.state

    const filteredTracksList = this.filterTrackList()

    return (
      <BgContainer>
        <Container>
          <Heading>Ed Sheeran</Heading>
          <Heading as="p" singer>
            Singer
          </Heading>
        </Container>
        <SearchCont>
          <Heading singer>Songs Playlist</Heading>
          <InputCont>
            <SearInput
              value={searchInput}
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearch}
            />
            <FiSearch color="#ffffff" fontSize="20px" />
          </InputCont>
        </SearchCont>
        {filteredTracksList.length > 0 && (
          <ResultCont>
            {filteredTracksList.map(eachItem => (
              <SongItem
                songDetails={eachItem}
                key={eachItem.id}
                onDeleteSongItem={this.onDeleteSongItem}
              />
            ))}
          </ResultCont>
        )}
        {filteredTracksList.length === 0 && (
          <Heading as="p" notFound>
            No Songs Found
          </Heading>
        )}
      </BgContainer>
    )
  }
}

export default MusicConcert
