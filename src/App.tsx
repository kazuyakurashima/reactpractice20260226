import CardExample from "./CardExample"
import EventExample from "./EventExample"

const App = () => {

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="bg-gray-300 p-4">
        <EventExample />
        <CardExample />
      </div>
    </div>
  )
}

export default App