import { useEffect, useRef } from "react";

const CherryWidget = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization in React Strict Mode
    if (initialized.current) return;
    initialized.current = true;

    // Execute the original Cherry widget IIFE pattern exactly
    (function (w: typeof window, d: Document, s: string, o: string, f: string) {
      // Create queue function if not exists
      const existingHw = (w as unknown as Record<string, unknown>)[o];
      if (typeof existingHw !== 'function') {
        const hw = function (...args: unknown[]) {
          ((hw as { q?: unknown[][] }).q = (hw as { q?: unknown[][] }).q || []).push(args);
        };
        (w as unknown as Record<string, unknown>)[o] = hw;
      }

      // Get the _hw function and call init
      const hwFn = (w as unknown as Record<string, unknown>)[o] as (...args: unknown[]) => void;
      hwFn(
        "init",
        {
          debug: false,
          variables: {
            slug: "rolora-spa-llc",
            name: "Rolora Spa LLC",
            images: [44],
            customLogo: "",
            defaultPurchaseAmount: 750,
            customImage: "",
            imageCategory: "medspa",
            language: "en",
          },
          styles: {
            primaryColor: "#7a6f9b",
            secondaryColor: "#7a6f9b10",
            fontFamily: "Montserrat",
            headerFontFamily: "Montserrat",
          },
        },
        ["hero", "calculator", "howitworks", "faq"]
      );

      // Load script if not already present
      const scriptId = "cherry-widget-script";
      if (!d.getElementById(scriptId)) {
        const js = d.createElement(s) as HTMLScriptElement;
        js.id = scriptId;
        js.src = f;
        js.async = true;
        const fjs = d.getElementsByTagName(s)[0];
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        } else {
          d.head.appendChild(js);
        }
      }
    })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
  }, []);

  return (
    <div className="w-full">
      <div id="all"></div>
      <div id="hero"></div>
      <div id="calculator"></div>
      <div id="howitworks"></div>
      <div id="testimony"></div>
      <div id="faq"></div>
    </div>
  );
};

export default CherryWidget;
