import P2p1 from "./P2p1";
import P2p2 from "./P2p2";
import Page1 from "./Page1";

export default function Content({ store }) {
  function Page() {
    switch (store.getState()) {
      case "Page1":
        return <Page1 store={store} />;
      case "P2p1":
        return <P2p1 store={store} />;
      case "P2p2":
        return <P2p2 store={store} />;
      default:
        return <Page1 store={store} />;
    }
  }

  return (
    <div>
      <Page />
    </div>
  );
}
