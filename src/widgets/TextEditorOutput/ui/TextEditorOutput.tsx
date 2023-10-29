import { memo } from 'react'
import Output from 'editorjs-react-renderer'

import CustomHeaderRenderer from './CustomHeaderRenderer/CustomHeaderRenderer'
import CustomParagraphRenderer from './CustomParagraphRenderer/CustomParagraphRenderer'
import CustomImageRenderer from './CustomImageRenderer/CustomImageRenderer'
import CustomQuoteRenderer from './CustomQuoteRenderer/CustomQuoteRenderer'

interface TextEditorOutputProps {
  content: any
}

const renderers = {
  header: CustomHeaderRenderer,
  paragraph: CustomParagraphRenderer,
  image: CustomImageRenderer,
  quote: CustomQuoteRenderer
}

const TextEditorOutput = memo(({ content }: TextEditorOutputProps) => {
  return <Output renderers={renderers} data={content}/>
})

export default TextEditorOutput
