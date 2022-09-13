

export default function ParallaxEffect({ children, heading }) {
  return (
    <>
      <div className="container">
        <div className="content">
          {children}
        </div>
        <div className="footer"></div> 
      </div>
      <header>
        <h1 id="page_title">{heading}</h1>
      </header>
    </>
  );
}