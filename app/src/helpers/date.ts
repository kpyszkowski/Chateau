export const getConditionallyFormattedDate = (dateString: string) => {
  const today = new Date()
  const date = new Date(dateString)

  const timeDifference = Math.abs(+today - +date)
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  if (daysDifference <= 1) {
    return getFormattedDate(date, {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  } else if (daysDifference <= 2) {
    return 'Yesterday'
  } else if (timeDifference <= 365 * 24 * 60 * 60 * 1000) {
    return getFormattedDate(date, {
      day: 'numeric',
      month: 'short',
    })
  } else {
    return getFormattedDate(date, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }
}

export const getFormattedDate = (date, options: Intl.DateTimeFormatOptions) => {
  return date.toLocaleString('en-US', options).replace(/\//g, '.')
}
