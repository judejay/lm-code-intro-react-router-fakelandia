import './Confession.css';


const Confession: React.FC = () => <>
    <p>
        It's very difficult to cathc people committing misdemeanours so we apprceciate it when citizens confess to us directly.

    </p>
    <p>
        However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!

    </p>


    <form className="form">
        <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" placeholder="input" />
        </div>
        <div className="form-group">
            <label htmlFor="reason">Reason for contact:</label>
            <select name="reason" id="reason">
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
            <textarea name="confession" id="confession" cols={30} rows={10}></textarea>
        </div>
        <button type="submit">Confess</button>
    </form>


</>;
export default Confession;
