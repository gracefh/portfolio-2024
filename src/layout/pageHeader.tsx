export const PageHeader = (props: {
  title: string;
  subtitle?: React.ReactElement | string;
  image?: string;
}) => {
  return (
    <section className="section-header">
      <h2 className="text-pink header-lg">{props.title}</h2>
      {props.subtitle != null && (
        <div className="subtitle">{props.subtitle}</div>
      )}
      {props.image != null && (
        <img
          className="header-image"
          src={props.image}
          alt={`header image for section ${props.title}`}
        />
      )}
    </section>
  );
};
