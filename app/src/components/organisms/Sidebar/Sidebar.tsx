import React from 'react'
import {
  StyledContainer,
  StyledConversationsList,
  StyledHeadingPrimary,
  StyledHeadingSecondary,
  StyledHeadingWrapper,
  StyledSearchbarTextField,
  StyledSearchbarWrapper,
  StyledWrapper,
} from './Sidebar.styled'
import { HiOutlineChat, HiOutlineLogout, HiOutlineSearch } from 'react-icons/hi'
import Avatar from '../../atoms/Avatar/Avatar'
import Button from '../../atoms/Button/Button'
import ConversationThumbnail from '../../molecules/ConversationThumbnail/ConversationThumbnail'

function Sidebar(props) {
  const [userFirstName] = 'John Doe'.split(' ')
  const conversationsData = [
    {
      name: 'Running buddies 🏃🏻',
      latestMessage: "It's time for training! Who is ready to get sweaty? 😅",
      latestMessageDate: new Date().toString(),
      participants: [
        { id: '1', name: 'John Doe', isAvailable: true },
        { id: '2', name: 'Paul Smith', isAvailable: false },
        { id: '3', name: 'William Ryans', isAvailable: false },
        { id: '4', name: 'Jane Bone', isAvailable: false },
      ],
      isUnread: false,
      userId: '1',
    },
    {
      participants: [
        { id: '1', name: 'John Doe', isAvailable: true },
        { id: '2', name: 'Paul Smith', isAvailable: false },
        { id: '3', name: 'William Ryans', isAvailable: false },
        { id: '4', name: 'Jane Bone', isAvailable: false },
      ],
      latestMessage: 'Hi John, how was your day?',
      latestMessageDate: new Date().toString(),
      userId: '1',
      isUnread: true,
    },
    {
      participants: [
        { id: '1', name: 'John Doe', isAvailable: true },
        { id: '2', name: 'Paul Smith', isAvailable: false },
        { id: '3', name: 'William Ryans', isAvailable: false },
        { id: '4', name: 'Jane Bone', isAvailable: false },
      ],
      latestMessage: 'Hi John, how was your day?',
      latestMessageDate: new Date().toString(),
      userId: '1',
      isUnread: false,
    },
    {
      participants: [
        { id: '1', name: 'John Doe', isAvailable: true },
        { id: '2', name: 'Paul Smith', isAvailable: true },
      ],
      latestMessage: 'Hi John, how was your day?',
      latestMessageDate: new Date().toString(),
      userId: '1',
      isUnread: false,
    },
  ]

  return (
    <StyledContainer {...props}>
      <StyledHeadingWrapper>
        <StyledHeadingPrimary>
          <HiOutlineChat tw="w-8 h-8" />
          Hi, {userFirstName}!
        </StyledHeadingPrimary>
        <Button
          variant="tertiary"
          hiddenLabel="Sign out"
        >
          <HiOutlineLogout tw="rotate-180 w-5 h-5" />
          <Avatar name={userFirstName} />
        </Button>
      </StyledHeadingWrapper>
      <StyledWrapper>
        <StyledSearchbarWrapper>
          <StyledSearchbarTextField
            label="Search people to chat"
            isLabelHidden
            buttonCallback={() => alert('Searching')}
            buttonIcon={HiOutlineSearch}
            buttonLabel="Search"
            placeholder="Search..."
          />
        </StyledSearchbarWrapper>
        <StyledHeadingSecondary>Conversations</StyledHeadingSecondary>
        <StyledConversationsList>
          {conversationsData.map((item, index) => (
            <li key={index}>
              <ConversationThumbnail {...item} />
            </li>
          ))}
        </StyledConversationsList>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default Sidebar
