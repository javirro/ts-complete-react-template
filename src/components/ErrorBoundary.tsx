import React from "react"

interface MyProps {
  children: React.ReactNode
  fallback?: any
}

interface MyState {
  hasError: boolean
  details?: Error
}

export interface FallbackProps {
  error: Error
}
class ErrorBoundary extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props)
    this.state = { hasError: false }
  }

  // static getDerivedStateFromError(error) {
  //   return { hasError: true }
  // }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      else return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
