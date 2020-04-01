import React, { createContext } from 'react';


interface MediaState {
    size: 'mobile' | 'tablet' | 'desktop',
    colNum: () => number
}


const MediaContext = createContext<MediaState>({
    size: 'desktop',
    colNum: () => 0
});

interface Props {

}

export class MediaProvider extends React.Component<Props, MediaState> {
    constructor(props: Props) {
        super(props)
        this.state = {
            size: 'desktop',
            colNum: this.colNum
        }
        this.colNum()
        console.log(this.colNum())
    }

    handleWindowsResize = () => {
        if (window.innerWidth < 579) {
            this.setState({ size: 'mobile' })
        } else if (window.innerWidth < 879) {
            this.setState({ size: 'tablet' })
        } else {
            this.setState({ size: 'desktop' })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowsResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowsResize)
    }


    colNum = () => {
        console.log(this.state.size)
        if (this.state.size === 'mobile') {
          return 1
        } else if (this.state.size === 'tablet') {
          return 2
        } else {
          return 4
        }
      }

    render() {
        return (
            <MediaContext.Provider value={this.state}>
                {this.props.children}
            </MediaContext.Provider>
        );
    }

}



export const MediaConsumer = MediaContext.Consumer;