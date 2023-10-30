import { memo } from 'react'
import Output from 'editorjs-react-renderer'

import CustomHeaderRenderer from './CustomHeaderRenderer/CustomHeaderRenderer'
import CustomParagraphRenderer from './CustomParagraphRenderer/CustomParagraphRenderer'
import CustomImageRenderer from './CustomImageRenderer/CustomImageRenderer'
import CustomQuoteRenderer from './CustomQuoteRenderer/CustomQuoteRenderer'
import CustomDelimiterRenderer from './CustomDelimiterRenderer/CustomDelimiterRenderer'
import CustomListRenderer from './CustomListRenderer/CustomListRenderer'

interface TextEditorOutputProps {
  content: any
}

const renderers = {
  header: CustomHeaderRenderer,
  paragraph: CustomParagraphRenderer,
  image: CustomImageRenderer,
  quote: CustomQuoteRenderer,
  delimiter: CustomDelimiterRenderer,
  list: CustomListRenderer
}

const TextEditorOutput = memo(({ content }: TextEditorOutputProps) => {
  return <Output renderers={renderers} data={content}/>
})

export default TextEditorOutput
