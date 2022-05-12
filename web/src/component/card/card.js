export const CardView = ({ data }) => {
  if (!data) return null;
  return (
    <div className="card">
      <header class="card__header">
        <div>
          <h3>{data?.title}</h3>
          <p>
            {data?.description}{" "}
            <a href={data?.url} target="_blank" rel="noreferrer">
              Click here
            </a>
          </p>
          <p className="slugs">{data?.slug}</p>
        </div>
      </header>
    </div>
  );
};
