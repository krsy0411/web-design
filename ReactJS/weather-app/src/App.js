import './style.css';
import { WeatherProvider } from './WeatherProvider/WeatherProvider';
import { WeatherApp } from './WeatherApp';

function App() {
  return (
    // context api를 통해 전역으로 넘긴 상태를 WeatherProvider 아래 자식으로 존재하는 컴포넌트들에서 사용가능
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
}

export default App;
