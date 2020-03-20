import React from 'react';
import './richtext.scss';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

export default class Richtext extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            editorState: BraftEditor.createEditorState(null),
            rawJSON: {}
        }
    }

    async componentDidMount () {
        // const htmlContent = await fetchEditorContent()
        // this.setState({
        //     editorState: BraftEditor.createEditorState(htmlContent)
        // })
    }

    submitContent = async () => {
        // const htmlContent = this.state.editorState.toHTML()
        // const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        let rawJSON = editorState.toRAW(true);
        this.setState({ 
            editorState,
            rawJSON 
        })
    }

    render () {
        return (
            <div className='richtext'>
                <div className='richtext1'>
                    <p>富文本编辑器</p>
                    <BraftEditor
                    value={this.state.editorState}
                    placeholder='请输入文本信息...'
                    style={{border: '1px solid #aaa'}}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                    />
                </div>
                <div className='change'>
                    <p>同步转换JSON</p>
                    <p>{JSON.stringify(this.state.rawJSON)}</p>
                </div>
            </div>
        );
    }
}