import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
  return (
    <div>
        <div style={{display : 'flex', flexWrap: 'wrap'}}>
            <div style={{width: '48%', border: '2px solid red', padding: '5px', margin: '2px'}}>
                <Users/>
            </div>
            <div style={{width: '48%', border: '2px solid red', padding: '5px', margin: '2px'}}>
                <Posts/>
            </div>
        </div>
        <div style={{width: '98%', border: '2px solid red', padding: '5px', margin: '2px'}}>
            <Comments/>
        </div>
    </div>
  );
}
export default App;
