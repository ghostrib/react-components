function App() {
    return (
        <div>
            <h1>Shopping List:</h1>
            <GroceryListItem list={['Cucumber', 'Kale', 'mana']} />
        </div>
    )
}

const GroceryListItem = (props) => {

    const handleChange = (event) => {
        console.log('event changed or some shit..')
        event.preventDefault()
    }

    return (
        <ul>
            <li onClick={handleChange}>{props.list[0]}</li>
            <li>{props.list[1]}</li>
            <li>{props.list[2]}</li>
        </ul>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))