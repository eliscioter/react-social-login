import { createFileRoute } from '@tanstack/react-router'
import Home from '@/pages/home/home'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <Home />
  )
}
