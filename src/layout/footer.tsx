export const Footer = () => {
  return (
    <section className="pink-background footer">
      <div className="instrument-sans-500 text-left">
        <ul className="non-decorated-list">
          <li>
            <b>Email:</b>{" "}
            <a
              className="text-link text-link-inverted"
              href="mailto:grace.f.huang@gmail.com"
            >
              grace.f.huang@gmail.com
            </a>
          </li>
          <li>
            <b>LinkedIn:</b>{" "}
            <a
              className="text-link text-link-inverted"
              href="https://www.linkedin.com/in/g-huang"
            >
              https://www.linkedin.com/in/g-huang
            </a>
          </li>
          <li>
            <b>Github:</b>{" "}
            <a
              className="text-link text-link-inverted"
              href="https://github.com/gracefh"
            >
              https://github.com/gracefh
            </a>
          </li>
        </ul>
      </div>
      <div className="instrument-sans-400 text-black text-left dot-list">
        <div>Grace Huang</div>
        <i className="fa fa-solid fa-circle fa-4xs"></i>
        <div>2026</div>
      </div>
    </section>
  );
};
