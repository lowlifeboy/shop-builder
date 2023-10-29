import { memo, useEffect, useRef, useState } from 'react'
import type EditorJS from '@editorjs/editorjs'

import cls from './TextEditor.module.scss'

import { editorDefaultData2 } from '../models/constants/editorDefaultData'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'

const TextEditor = memo(() => {
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<EditorJS | null>(null)

  const initializeEditor = async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Header = (await import('@editorjs/header')).default
    const Table = (await import('@editorjs/table')).default
    const List = (await import('@editorjs/list')).default
    const Embed = (await import('@editorjs/embed')).default
    const Delimiter = (await import('@editorjs/delimiter')).default
    const CheckList = (await import('@editorjs/checklist')).default
    const Paragraph = (await import('@editorjs/paragraph')).default
    const SimpleImage = (await import('@editorjs/simple-image')).default
    const Code = (await import('@editorjs/code')).default
    const InlineCode = (await import('@editorjs/inline-code')).default
    const Marker = (await import('@editorjs/marker')).default
    const Quote = (await import('@editorjs/quote')).default
    const Raw = (await import('@editorjs/raw')).default
    const Warning = (await import('@editorjs/warning')).default

    if (ref.current) {
      ref.current = new EditorJS({
        // @ts-expect-error Not typed library
        holder: ref.current,
        readOnly: true,
        data: editorDefaultData2,
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [1, 2, 3, 4],
              defaultLevel: 1
            }
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            }
          },
          embed: {
            class: Embed,
            inlineToolbar: true
          },
          image: SimpleImage,
          checkList: CheckList,
          delimiter: Delimiter,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          },
          code: Code,
          inlineCode: InlineCode,
          marker: Marker,
          quote: Quote,
          raw: Raw,
          warning: Warning
        }
      })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      await initializeEditor()
    }

    if (isMounted) {
      void init()

      return () => {
        if (ref.current) {
          ref.current.destroy()
        }
      }
    }
  }, [isMounted])

  const save = () => {
    if (ref.current) {
      void ref.current.save().then((outputData) => {
        console.log(outputData)
      })
    }
  }

  return (
    <>
      {/* @ts-expect-error  Not typed library */}
      <div ref={ref} id="editorjs" className={cls.textEditor} />
      <AppButton
        onClick={save}
        size={AppButtonSize.M}
        theme={AppButtonTheme.SHARP}
        fillTheme={AppButtonFillTheme.SOLID}
      >
        {'Save'}
      </AppButton>
    </>
  )
})

export default TextEditor
