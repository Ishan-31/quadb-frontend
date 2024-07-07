import React, { useEffect } from "react";

const WhatsAppChatWidget = () => {
  useEffect(() => {
    const url =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?32290";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#12322f",
        ctaText: "Chat with us",
        borderRadius: "25",
        marginLeft: "20",
        marginRight: "0",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "left",
      },
      brandSetting: {
        brandName: "Label Ruby",
        brandSubTitle: "undefined",
        brandImg: "https://i.postimg.cc/P5XDHnrs/whatsapp-svgrepo-com-1.png",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, %0A I have a question about",
        backgroundColor: "#12322f",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "+918431857010",
      },
    };
    script.onload = function () {
      window.CreateWhatsappChatWidget(options);
    };
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  return <></>;
};

export default WhatsAppChatWidget;
