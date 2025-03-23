import Form from './pages/Form';
import { useWindowSize } from './store/WindowContext';

export default function App() {
  const { windowSizeChecker } = useWindowSize();

  return (
    <div className="app">
      <Form />
    </div>
  );
}
