import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 350px;
  padding-left: 60px;
  padding-bottom: 30px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: ${props => (props.singer ? '20px' : '30px')};
  margin: 0;
  padding: 10px;
  text-align:${props => (props.notFound ? 'center' : null)};
  margin-top:${props => (props.notFound ? '100px' : null)};
`
export const SearchCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 90%;
  padding-top: 30px;
  padding-bottom:25px;
`
export const InputCont = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding-right: 10px;
`
export const SearInput = styled.input`
  border: 0px;
  width: 200px;
  height: 35px;
  outline: none;
  border-radius: 5px;
  background: transparent;
  color:#ffffff;
  padding-left: 20px;

`
export const ResultCont = styled.ul`
  list-style-type:none;
  padding-left:0px;
  align-self:center;
  width:90%;
  gap:20px;
  display:flex;
  flex-direction:column;
  overflow-y:scroll;
  height:40vh;
`
