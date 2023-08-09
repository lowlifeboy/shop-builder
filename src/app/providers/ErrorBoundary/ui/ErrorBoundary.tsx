import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // static getDerivedStateFromError (error: Error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true }
  // }

  componentDidCatch (error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error, info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback="Loading localization...">{this.props.fallback}</Suspense>
    }

    return this.props.children
  }
}
