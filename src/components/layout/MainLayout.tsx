import { JSX } from "react"

interface Props {
    children: JSX.Element
}

export const MainLayout = ({children}: Props) => {
  return (
    <div>
        <h1>Header</h1>
        {children}
        <h2>Footer</h2>
    </div>
  )
}
