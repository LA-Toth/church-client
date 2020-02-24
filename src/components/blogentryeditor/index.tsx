import React from 'react'
import styles from './index.scss'
import ContentTitle from '../ui/contenttitle'
import Editor from '../ui/editor'
import TooltipOverlay from '../ui/tooltipoverlay'

export type BlogEntryEditorProps = {
  title: string
  content?: string
}

type BlogEntryEditorState = {
  changed: boolean
}

export class BlogEntryEditor extends React.Component<BlogEntryEditorProps, BlogEntryEditorState> {
  state = {
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
    const { title, content } = this.props

    return (
      <>
        <ContentTitle
          title={title}
          superScript={
            changed ? (
              <TooltipOverlay id="blogEntryTooltip" tooltip="The content of the editor is changed, needs to be saved">
                <span className={styles.changedTitle}>*</span>
              </TooltipOverlay>
            ) : (
              undefined
            )
          }
        />
        <Editor content={content} onContentChange={this.handleChange} onSave={this.handleSave} />
      </>
    )
  }

  handleSave(content) {
    console.log(content)
  }

  handleChange(changed: boolean) {
    this.setState(oldState => ({ ...oldState, changed: changed }))
  }
}

export default BlogEntryEditor
