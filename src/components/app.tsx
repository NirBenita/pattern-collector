import * as React from 'react'
import { Header } from './header'
import { Mockup } from './content'
import style from './app.st.css'

const mockPatterns: Array<IPattern> = [
  {
    coordinates: {
      top: 240,
      left: 176,
      width: 274,
      height: 162
    } as Coordinates,
    tags: [{ name: 'graph', count: 3 }]
  },
  {
    coordinates: {
      top: 240,
      left: 476,
      width: 274,
      height: 162
    } as Coordinates,
    tags: [{ name: 'graph', count: 2 }]
  }
]

export const App: React.SFC<{ className?: string }> = props => (
  <div {...style('root', {}, props)}>
    <Header message="Welcome to React with Stylable" />
    <Mockup patterns={mockPatterns} mainFile="src/index.tsx" />
  </div>
)
