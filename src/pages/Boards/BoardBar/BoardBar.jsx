import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

const Boardbar = ({ board }) => {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderBottom: '1px solid white',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={< AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover ': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/5c/63/a9/5c63a94d26f6c5e11320c41200e9c3c3.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/95/16/10/951610e5ef754dbcc70bfa690dd6fe8a.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/736x/b3/67/34/b36734f5cf92b21487584275c1ff0be6.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/f7/3c/4e/f73c4e53e36c0f57cf2c9ef073719747.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/5d/59/c9/5d59c92c7ff3ca988d34e1768b784013.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
          <Tooltip title='nguyendev'>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/57/cf/2e/57cf2e4e84ee17eb5bd1f0ea767230d1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box >
  )
}

export default Boardbar