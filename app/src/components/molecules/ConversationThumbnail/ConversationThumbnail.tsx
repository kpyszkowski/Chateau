import React, { useMemo } from 'react'
import type { ConversationThumbnailProps } from './ConversationThumbnail.types'
import {
  StyledContainer,
  StyledWrapper,
  StyledHeading,
  StyledName,
  StyledAvatarsWrapper,
  StyledMessageWrapper,
  StyledMessage,
  StyledTimestamp,
  StyledNewMessageIndicator,
} from './ConversationThumbnail.styled'
import Avatar from '../../atoms/Avatar/Avatar'
import { getConditionallyFormattedDate } from '../../../helpers'
import 'twin.macro'

function ConversationThumbnail(props: ConversationThumbnailProps) {
  const {
    name = '',
    participants,
    latestMessage,
    latestMessageDate,
    isUnread = false,
    userId,
    ...restProps
  } = props

  const participantsWithoutUser = useMemo(
    () =>
      participants
        .filter(({ id }) => id !== userId)
        .map(({ id, name, isAvailable }) => ({ id, name, isAvailable })),
    [participants, userId],
  )

  const timestamp = getConditionallyFormattedDate(latestMessageDate)

  const conversationName = useMemo(() => {
    if (name) {
      return name
    }

    const isPrivateConversation = participantsWithoutUser.length == 1
    if (isPrivateConversation) {
      return participantsWithoutUser.at(0).name
    }

    const alternativeGroupConversationName = participantsWithoutUser
      .map(({ name }) => name.split(' ')[0])
      .join(', ')
    return alternativeGroupConversationName
  }, [participantsWithoutUser, name])

  return (
    <StyledContainer
      href={'#'}
      {...restProps}
    >
      <StyledWrapper>
        <StyledHeading>
          <StyledName $isBold={isUnread}>{conversationName}</StyledName>
          <StyledAvatarsWrapper>
            {participantsWithoutUser.map(({ id, name, isAvailable }) => (
              <Avatar
                key={id}
                name={name}
                showStatus={participants.length === 2}
                isAvaliable={isAvailable}
              />
            ))}
          </StyledAvatarsWrapper>
        </StyledHeading>
        <StyledMessageWrapper>
          <StyledMessage $isBold={isUnread}>{latestMessage}</StyledMessage>
          <StyledTimestamp>{timestamp}</StyledTimestamp>
        </StyledMessageWrapper>
      </StyledWrapper>
      {isUnread && <StyledNewMessageIndicator />}
    </StyledContainer>
  )
}

export default ConversationThumbnail
