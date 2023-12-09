import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import Boardbar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'

const Board = () => {
  return (
    <div>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppBar />
        <Boardbar board={mockData?.board} />
        <BoardContent board={mockData?.board} />
      </Container>
    </div>
  )
}

export default Board
