import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{
          color: isCurrentPath ? "#000" : "#767676",
          display: isCurrentPath ? "block" : "block",
          borderBottom: isCurrentPath
            ? "2px solid #000000"
            : "2px solid #ffffff",
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default withRouter(ActiveLink);
