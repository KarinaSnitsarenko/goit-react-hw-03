import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.container}>
        <p className={css.textContainer}> 👤 {name}</p>
        <p className={css.textContainer}> 📞 {number}</p>
      </div>
      <div className={css.container}>
        <button
          className={css.contactButon}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
