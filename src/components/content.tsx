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

const Pattern: React.SFC<PatternProps> = (props) => {
  const { width, height, top, left } = props.pattern.coordinates

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
      {props.pattern.tags
        ? props.pattern.tags.map((tag: ITag, index: number) => (
          <span key={index}>
            {tag.name}, {tag.count}
          </span>
        ))
        : null}
    </div>
  )
}



export class Mockup extends React.Component<MockupProps, {}> {
  componentWillMount() {
    fetch('http://localhost:8080/', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(resp => resp.json())
      .then(resp => {
        // const records = records;
        // console.log(resp);
        console.log("yo");
      });
  }

  public render() {
    return (
      <div {...style('root', {}, this.props)}>
        <div className={style.mockUp}>
          {this.props.patterns.map((pattern: IPattern, index) => (
            <Pattern pattern={pattern} />
          ))}
        </div>
      </div>
    );
  }
}