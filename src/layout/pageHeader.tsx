export const PageHeader = (props: { title: string; subtitle?: string }) => {
  return (
    <section className="section-header">
      <h2 className="text-pink header-lg">{props.title}</h2>
      {props.subtitle != null && (
        <div className="subtitle">{props.subtitle}</div>
      )}
    </section>
  );
};
