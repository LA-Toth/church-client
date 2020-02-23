import React from 'react'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import styles from './index.scss'
import classnames from 'classnames'

export type EditorProps = {
  markChangedEditor?: boolean
  content?: string
  onContentChange?: (changed: boolean) => void
  onSave?: (content: string) => void
}

type EditorState = {
  savedContent: string
  changed: boolean
}

const defaultContent = '<p><br></p>'

export class Editor extends React.Component<EditorProps, EditorState> {
  state = {
    savedContent: this.props.content || defaultContent,
    changed: false,
  }

  constructor(props) {
    super(props)
    // eslint-disable-next-line immutable/no-mutation
    this.handleChange = this.handleChange.bind(this)
    // eslint-disable-next-line immutable/no-mutation
    this.handleSave = this.handleSave.bind(this)
  }

  render() {
    const { changed } = this.state
    const { content, markChangedEditor } = this.props

    return (
      <div>
        <div className={classnames(styles.editor, markChangedEditor && changed && styles.unsavedEditor)}>
          <SunEditor
            lang="en"
            placeholder="Please type here..."
            setOptions={{
              height: 500,
              minHeight: 250,
              buttonList: [
                ['save'],
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['fontColor', 'hiliteColor'],
                ['removeFormat'],
                '/',
                ['align', 'list'],
                ['outdent', 'indent'],
                ['horizontalRule', 'table'],
                ['link', 'image', 'video'],
                ['showBlocks', 'codeView'],
                ['preview', 'print'],
                ['fullScreen'],
              ],
              charCounter: true,
              wordCounter: true,
              callBackSave: this.handleSave,
            }}
            onImageUpload={this.foo}
            onChange={this.handleChange}
            setContents={content || defaultContent}
          />
        </div>
      </div>
    )
  }

  foo() {
    console.log('img uploaded')
  }

  handleSave(content: string) {
    const { onContentChange, onSave } = this.props
    this.setState(oldState => ({ ...oldState, savedContent: content, changed: false }))
    if (onSave) onSave(content)
    if (onContentChange) onContentChange(false)
  }

  handleChange(editorContent) {
    const { savedContent } = this.state
    const { onContentChange } = this.props
    const changed = savedContent !== editorContent
    this.setState(oldState => ({ ...oldState, changed: changed }))
    if (onContentChange) onContentChange(true)
  }
}

export default Editor
