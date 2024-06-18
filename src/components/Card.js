const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
      <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
        <div className="content">
          <div className="pd white">
            <div className="d-flex mb-2">
              <h5>{data.name}</h5>
              <span className="price">
                <span>{`${data.price}`}</span>
              </span>
            </div>
            <p>{data.description ? data.description : lorem}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;