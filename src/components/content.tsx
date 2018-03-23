import * as React from 'react'
import style from './content.st.css'

interface MockupProps {
  className?: string
  mainFile: string
  patterns: Array<IPattern>
  // TODO: image
}

interface PatternProps {
  pattern: IPattern
}

const Pattern: React.SFC<PatternProps> = ({ pattern }) => {
  const { width, height, top, left } = pattern.coordinates

  return (
    <div
      className={style.pt}
      style={{
        width: width,
        height: height,
        top: top,
        left: left,
        backgroundImage: "url('../../public/demo.png')"
      }}
    >
      {pattern.tags
        ? pattern.tags.map((tag, index) => (
            <span>
              {tag.name}, {tag.count}
            </span>
          ))
        : null}
    </div>
  )
}

export const Mockup = (props: MockupProps) => (
  <div {...style('root', {}, props)}>
    <div className={style.mockUp}>
      {props.patterns.map((pattern: IPattern, index) => (
        <Pattern pattern={pattern} />
      ))}
    </div>
  </div>
)
