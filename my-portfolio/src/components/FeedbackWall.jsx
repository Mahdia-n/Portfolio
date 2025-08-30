import { useState } from "react";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState({ name: "", rating: 5, comment: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setFeedbacks([{ ...newFeedback, id: Date.now() }, ...feedbacks]);
    setNewFeedback({ name: "", rating: 5, comment: "" });
  }

  return (
    <section style={{ padding: "2rem", background: "#f9f9f9" }}>
      <h2>Feedback Wall</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={newFeedback.name}
          onChange={e => setNewFeedback({ ...newFeedback, name: e.target.value })} />
        <select value={newFeedback.rating}
          onChange={e => setNewFeedback({ ...newFeedback, rating: +e.target.value })}>
          {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
        </select>
        <textarea placeholder="Comment"
          value={newFeedback.comment}
          onChange={e => setNewFeedback({ ...newFeedback, comment: e.target.value })} />
        <button type="submit">Post</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {feedbacks.map(f => (
          <div key={f.id} style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "0.5rem",
            background: f.rating === 5 ? "#fff9c4" : "#fff"
          }}>
            <strong>{f.name}</strong> ⭐ {f.rating}
            <p>{f.comment}</p>
            {f.rating === 5 && <span>🌟 Featured</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
