import ExpenseItem from "./components/ExpenseItem";

function App () {
    let Expenses = [
        { 
            id: 'e1',
            title: 'School Fee',
            amount:2500,
            date: new Date(2021, 5, 12)
        },
        { 
            id: 'e2',
            title: 'Car Expense',
            amount:8550,
            date: new Date(2021, 9, 2)
        },
        { 
            id: 'e3',
            title: 'Food Expense',
            amount:1500,
            date: new Date(2021, 6, 22)
        },
        { 
            id: 'e4',
            title: 'House Expense',
            amount:7050,
            date: new Date(2021, 8, 8)
        },
    ]

    return (
         <div>
            <h2>My Expense Details</h2>
            <ExpenseItem 
                date={Expenses[0].date} 
                title={Expenses[0].title} 
                amount={Expenses[0].amount} >
            </ExpenseItem>
            <ExpenseItem 
                date={Expenses[1].date} 
                title={Expenses[1].title} 
                amount={Expenses[1].amount}>
            </ExpenseItem>
            <ExpenseItem 
                date={Expenses[2].date} 
                title={Expenses[2].title} 
                amount={Expenses[2].amount}>
            </ExpenseItem>
            <ExpenseItem 
                date={Expenses[3].date} 
                title={Expenses[3].title} 
                amount={Expenses[3].amount}>
            </ExpenseItem>
         </div>
    );
    
}

export default App;