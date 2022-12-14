import "./card.styles.css";

const Card = ({ monster: { id, firstName, image, email } }) => (
   <div className="card" key={id}>
      <img
         alt={`monster ${firstName}`}
         src={`${image}`}
         onError={(e) =>
            (e.currentTarget.src =
               "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
         }
         width="100"
      />
      <h1>{firstName}</h1>
      <p>{email}</p>
   </div>
);

export default Card;
