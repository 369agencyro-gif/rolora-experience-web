import { useEffect } from "react";

declare global {
  interface Window {
    _hw: (action: string, config: object, widgets: string[]) => void;
  }
}

const CherryWidget = () => {
  useEffect(() => {
    // Load Cherry widget script
    if (!document.getElementById("_hw")) {
      const script = document.createElement("script");
      script.id = "_hw";
      script.src = "https://files.withcherry.com/widgets/widget.js";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window._hw) {
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
        }
      };
    } else {
      // Script already loaded, just reinitialize
      if (window._hw) {
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
