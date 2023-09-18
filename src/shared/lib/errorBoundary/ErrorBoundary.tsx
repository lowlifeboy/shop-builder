import { Component, type ErrorInfo, type ReactNode } from 'react'
import i18n from 'shared/config/i18n/i18n'

interface Props {
  children?: ReactNode
}

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render () {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>{i18n.t('somethingWentWrong')}</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}
