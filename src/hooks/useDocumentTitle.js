import { useLayoutEffect } from "preact/hooks";

function useDocumentTitle(pageTitle) {
  useLayoutEffect(() => {
    document.title = `${pageTitle} - Shop Merchant`;
  }, [pageTitle]);
}

export default useDocumentTitle;
