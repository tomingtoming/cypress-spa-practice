import React from 'react';
import './App.css';
import axios, {AxiosResponse} from 'axios'

interface error {
    message: string;
}

function App() {
    const [hit, setHit] = React.useState<number | error>();
    React.useEffect(() => {
        axios.get("https://api.countapi.xyz/hit/tomingtoming/cypress-spa-practice")
            .then((res: AxiosResponse<{ value: number }>) => setHit(res.data.value))
            .catch(e => setHit({message: 'something error happened'}));
    }, [setHit]);
    return (
        <div className="App">
            {typeof hit === 'number' && <>You are {hit}th visitor!</>}
            {typeof hit === 'object' && <>ERROR[{hit.message}]</>}
            {hit === undefined && <>Now loading...</>}
        </div>
    );
}

export default App;
