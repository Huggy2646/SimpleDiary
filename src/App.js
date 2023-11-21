import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
    { id: 1, author: '오성혁', content: 'hi_1', emotion: 5, created_date: new Date().getTime() },
    { id: 2, author: '홍길동', content: 'hi_2', emotion: 3, created_date: new Date().getTime() },
    { id: 3, author: '이영희', content: 'hi_3', emotion: 2, created_date: new Date().getTime() },
    { id: 4, author: '이철수', content: 'hi_4', emotion: 1, created_date: new Date().getTime() },
];
function App() {
    return (
        <div className="App">
            <DiaryEditor />
            <DiaryList diaryList={dummyList} />
        </div>
    );
}

export default App;
