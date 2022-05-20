import { useState, useRef } from 'react'
import './styles.css'
import CreateGoal from './CreateGoal'
import Goals from './Goals'
import Alert from './Alert'

function App() {
  const [goals, setGoals] = useState([]);
  const titleRef = useRef();
  const contentRef = useRef();

  const [alert, setAlert] = useState({ show: false, msg: "" });
  const showAlert = (show = false, msg = "") => {
    setAlert({ show, msg });
  };

  const makeid = (length = 50) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  const addGoal = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    if (content === "" || title === "") {
      showAlert(true, "Please Fill In All The Fields");
      return
    }
    setGoals((prevGoals) => {
      return [...prevGoals, {id: makeid(), title:title, content:content}];
    });
    titleRef.current.value = null;
    contentRef.current.value = null;
    showAlert(true, "Goal Added Successfully")
  }

  const removeGoal = (id) => {
    setGoals(prevGoals => {
      return prevGoals.filter((goalItem) => {
        return id !== goalItem.id;
      });
    });
    showAlert(true, "Goal Deleted Successfully");
  }

  return (
    <div className="App">
      <header className="title">ﯧ GoalKeeper - Keep Your Goals</header>
      <CreateGoal addGoal={addGoal} titleRef={titleRef} contentRef={contentRef} />
      <Goals key={goals.id} goals={goals} onDelete={removeGoal} />
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
    </div>
  )
}

export default App;
