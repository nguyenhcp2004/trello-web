import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import Boardbar from './BoardBar'
import BoardContent from './BoardContent'

const Board = () => {
  return (
    <div>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppBar />
        <Boardbar />
        <BoardContent />
      </Container>
    </div>
  )
}

export default Board
