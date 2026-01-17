import { useEffect, useRef, useId } from "react";

const CherryWidget = () => {
  const initialized = useRef(false);
  const uniqueId = useId().replace(/:/g, '');

  useEffect(() => {
    // Prevent double initialization in React Strict Mode
    if (initialized.current) return;
    initialized.current = true;

    console.log("CherryWidget: Initializing...", uniqueId);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Execute the original Cherry widget IIFE pattern exactly
      (function (w: typeof window, d: Document, s: string, o: string, f: string) {
        // Create queue function if not exists
        const existingHw = (w as unknown as Record<string, unknown>)[o];
        if (typeof existingHw !== 'function') {
          const hw = function (...args: unknown[]) {
            ((hw as { q?: unknown[][] }).q = (hw as { q?: unknown[][] }).q || []).push(args);
          };
          (w as unknown as Record<string, unknown>)[o] = hw;
          console.log("CherryWidget: Created _hw queue function");
        } else {
          console.log("CherryWidget: _hw function already exists");
        }

        // Get the _hw function and call init
        const hwFn = (w as unknown as Record<string, unknown>)[o] as (...args: unknown[]) => void;
        console.log("CherryWidget: Calling init with slug 'rolora-spa-llc'");
        hwFn(
          "init",
          {
            debug: true, // Enable debug mode to see more info
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
          console.log("CherryWidget: Loading script from", f);
          const js = d.createElement(s) as HTMLScriptElement;
          js.id = scriptId;
          js.src = f;
          js.async = true;
          js.onload = () => console.log("CherryWidget: Script loaded successfully");
          js.onerror = (e) => console.error("CherryWidget: Script load error", e);
          const fjs = d.getElementsByTagName(s)[0];
          if (fjs && fjs.parentNode) {
            fjs.parentNode.insertBefore(js, fjs);
          } else {
            d.head.appendChild(js);
          }
        } else {
          console.log("CherryWidget: Script already loaded");
        }
      })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
    }, 100);

    return () => clearTimeout(timer);
  }, [uniqueId]);

  return (
    <div className="w-full cherry-widget-container">
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
