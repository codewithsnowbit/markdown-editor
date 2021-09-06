import React from 'react';
import { sampleText } from './SampleText'
import './styles/MainContent.css'
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/vibrant-ink.css';

class MainContent extends React.Component{
    state = {
        text: sampleText
      }
    
      handleChange = event => {
        const text = event.target.value
        this.setState({ text })
      }
      renderText = text => {
        const __html = marked(text, { sanitize: false })
        return { __html }
      }
      
    render(){
        return(
            <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                {/* <CodeMirror
                    onChange={this.handleChange}
                    lazyLoadMode={false}
                    options={{
                        theme: 'vibrant-ink',
                        tabSize: 2,
                        keyMap: 'sublime',
                        mode: 'markdown',
                    }} /> */}
                <textarea
                    onChange={this.handleChange}
                    value={this.state.text}
                    className='form-control bg-dark text-light'
                    rows='35' />
                </div>
                <div className='col-sm-6 border bg-dark text-light'>
                <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
                </div>
            </div>
            </div>
        )
    }
}


export default MainContent;