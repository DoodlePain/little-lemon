import { useState, useEffect } from "react";

function InputField({ label, type, id, value, onChange, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label> <br />
      <input type={type} id={id} value={value} onChange={onChange} {...props} />
    </div>
  );
}

export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [finalTime, setFinalTime] = useState([]);

  useEffect(() => {
    setFinalTime(
      props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );
  }, [props.availableTimes]);

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const date = new Date(selectedDate);
    props.updateTimes(date);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add form validation and submission logic here
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <InputField
        label="First Name"
        type="text"
        id="fName"
        placeholder="First Name"
        required
        minLength={2}
        maxLength={50}
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <InputField
        label="Last Name"
        type="text"
        id="lName"
        placeholder="Last Name"
        required
        minLength={2}
        maxLength={50}
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        placeholder="Email"
        required
        minLength={4}
        maxLength={200}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Phone Number"
        type="tel"
        id="phonenum"
        placeholder="(xxx)-xxx-xxxx"
        required
        minLength={10}
        maxLength={25}
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <InputField
        label="Number of People"
        type="number"
        id="people"
        placeholder="Number of People"
        required
        min={1}
        max={100}
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
      <div>
        <label htmlFor="date">Select Date</label> <br />
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="time">Select Time</label> <br />
        <select id="time" required>
          {finalTime}
        </select>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="preferences">Seating preferences</label> <br />
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>
      <div>
        <label htmlFor="comments">Additional Comments</label> <br />
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <div>
        <br />
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button type="submit" className="action-button">
          Book Table
        </button>
      </div>
    </form>
  );
}
