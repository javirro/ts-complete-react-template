import React from 'react'
import '../styles/Loading.css'

interface LoadingProps {
  className: string
  others: any
}

const Loading = ({ className, ...others }: LoadingProps) => {
  const cls = className ? className + ' loading' : 'loading'

  return <div className={cls} {...others} />
}


export default Loading
