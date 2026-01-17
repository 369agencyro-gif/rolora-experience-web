import { useEffect } from "react";

declare global {
  interface Window {
    _hw: {
      (action: string, config: object, widgets: string[]): void;
      q?: unknown[][];
    };
  }
}

const CherryWidget = () => {
  useEffect(() => {
    // Setup the queue function first (before script loads)
    window._hw = window._hw || function (...args: unknown[]) {
      (window._hw.q = window._hw.q || []).push(args);
    };

    // Initialize with config - this gets queued
    window._hw(
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

    // Load the script if not already loaded
    if (!document.getElementById("cherry-widget-script")) {
      const script = document.createElement("script");
      script.id = "cherry-widget-script";
      script.src = "https://files.withcherry.com/widgets/widget.js";
      script.async = true;
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }
    }
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
