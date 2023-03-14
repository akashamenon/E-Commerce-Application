import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import reducer from '../../store/Reducers'
import { createStore } from 'redux';


const useStyles = makeStyles({
    root: {
        textAlign: "center",
        height: "100%"
    }
});
const store = createStore(reducer);
function Todo() {
    const classes = useStyles();
    return (
        <Provider store={store}>
        <div className={classes.root}>
            <Form />
            <TodoList />
        </div>
        </Provider>
    )

}
export default Todo;