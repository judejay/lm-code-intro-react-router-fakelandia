import { ChangeEvent, FormEvent, useState, EventHandler } from 'react';
import './Confession.css';
import { MISDEMEANOURS } from '../types/misdemeanor.types';
type HtmlEvent = React.ChangeEvent<HTMLSelectElement>;



const Confession: React.FC = () => {
    const [mySelectInputValue, setMySelectInputValue] =
        useState<typeof MISDEMEANOURS>();
    const [invalid, setInvalid] = useState(true);
    const [myTextInputValue, setMyTextInputValue] = useState({
        subject: "",
        details: ""

    });

    function validate() {
        if (
            (myTextInputValue.details !== "") &&
            myTextInputValue.subject &&
            mySelectInputValue
        ) {
            setInvalid(false);
            console.log(myTextInputValue);
            console.log(mySelectInputValue);
        } else {
            setInvalid(true);
        }
    }

    const handleSelect: EventHandler<HtmlEvent> = (event: HtmlEvent): void => {
        console.log(event.target.value);
        setMySelectInputValue(event.target.value as unknown as typeof MISDEMEANOURS);
        validate();
    };

    function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        console.log(event.target.value);

        setMyTextInputValue({
            ...myTextInputValue,
            [event.target.name]: event.target.value,
        })
        validate();
    }
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        console.log(event.target.value);

        setMyTextInputValue({
            ...myTextInputValue,
            [event.target.name]: event.target.value,
        });
        validate();
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const submitData = `{"subject": "${myTextInputValue.subject}", "reason": "${mySelectInputValue}", "details": "${myTextInputValue.details}"}`;
        const jsonSubmitData = JSON.parse(submitData);
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:5173');
        headers.append("Access-Control-Allow-Methods", "POST");
        headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
        fetch('http://localhost:8080/api/confess', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(jsonSubmitData)

        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <> <p>
            It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.

        </p>
            <p>
                However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!

            </p>


            <form onSubmit={handleSubmit} aria-label="form" className="form">
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        value={myTextInputValue.subject ?? ""}

                        onChange={handleChange}
                        type="text" name="subject" id="subject" placeholder="input" />
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason for contact:</label>
                    <select name="reason" id="reason" value={mySelectInputValue} onChange={handleSelect}>
                        <option value="none">Select</option>
                        <option value="united">United</option>
                        <option value="lift">Lift</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="rudeness">Rudeness</option>
                        <option value="vent">I just want to talk</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="confession"></label>
                    <textarea value={myTextInputValue.details ?? ""}
                        onChange={handleTextChange}
                        name="details" id="details" cols={30} rows={10}></textarea>
                </div>
                <button type="submit" disabled={invalid}>Confess</button>
            </form>


        </>);
}

export default Confession;
