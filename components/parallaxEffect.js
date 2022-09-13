

export default function ParallaxEffect({ children, heading }) {
  return (
    <>
      <div class="container">
        <div class="content">
          {children}
        </div>
      </div>
      <header>
        <h1 id="page_title">{heading}</h1>
      </header>
    </>
  );
}