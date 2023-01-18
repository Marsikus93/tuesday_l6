import React, {useState} from 'react';

export const LocalStorage = () => {
    type tasksType = {

        id: number,
        title: string
    }
    type CustomType = tasksType &
        {
            isDone: boolean
        }
    const tasks: CustomType[] = [
        {id: 1, title: "HML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]
    const [currentTasks, setCurrentTasks] = useState<CustomType[]>([])
    const saveTodo = () => {
        const stateAsString = JSON.stringify(tasks)
        localStorage.setItem('tasksKey', stateAsString)
    }
    const onExtractTodo = () => {
        const stateAsString = localStorage.getItem('tasksKey')
        if (stateAsString !== null) setCurrentTasks(JSON.parse(stateAsString))
    }
    const removeTasks=()=>{
        localStorage.removeItem('tasksKey')
        setCurrentTasks([])
    }
    return (
        <div>
            <button onClick={saveTodo}>SAVE</button>
            <button onClick={onExtractTodo}>EXTRACT</button>
            <button  onClick={removeTasks}>DELETE</button>
            <ul>
                {
                    currentTasks.length
                        ? currentTasks.map(el => {
                            return (
                                <li key={el.id}>
                                    <span>{el.id}</span>
                                    <span>{el.title}</span>
                                    <input type={'checkbox'} checked={el.isDone}/>
                                </li>
                            )
                        })
                        : <div></div>
                }
                {/*{currentTasks.map(el=>{*/}
                {/*    return(*/}
                {/*        <li key={el.id}>*/}
                {/*            <span>{el.id}</span>*/}
                {/*            <span>{el.title}</span>*/}
                {/*            <input type={'checkbox'} checked={el.isDone}/>*/}
                {/*        </li>*/}
                {/*    )*/}
                {/*})}*/}
            </ul>
        </div>

    );
};

