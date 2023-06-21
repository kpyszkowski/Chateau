import type { PropsWithChildren, ReactNode } from 'react'

export interface AppLayoutProps extends PropsWithChildren {
  renderAside: () => ReactNode
}
