// npm install @botpress/webchat@2.3

import { useState } from 'react';

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = "9d7b0ccd-92fb-4597-9545-75939e121dc2";

const configuration: Configuration = {
  color: '#000',
};

export default function App() {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}

/* 
Chat Bubble
<script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/04/18/20/20250418200833-RZ3N10OY.js"></script>

*/
/*

<!-- In your <head> tag -->
<script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"></script>
<style>
  #webchat .bpWebchat {
    position: unset;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }

  #webchat .bpFab {
    display: none;
  }
</style>

<!-- Put this on your page BEFORE the script below -->
<div id="webchat" style="width: 500px; height: 500px;"></div>

<!-- In your <body> tag -->
<script>
  window.botpress.on("webchat:ready", () => {
    window.botpress.open();
  });
  window.botpress.init({
  "botId": "97363fa2-98f1-47b7-9849-f8f51a100666",
  "configuration": {
    "botName": "Kowalski-Ia",
    "botAvatar": "https://files.bpcontent.cloud/2025/04/21/19/20250421193031-CNN7P3H3.png",
    "botDescription": "Sou um especialista em soluções tecnológicas da ASCII - Empresa Júnior",
    "website": {
      "title": "https://asciiej.com.br",
      "link": "https://asciiej.com.br"
    },
    "email": {
      "title": "comercial@asciiej.com.br",
      "link": "comercial@asciiej.com.br"
    },
    "phone": {
      "title": "(34) 99152-3387",
      "link": "(34) 99152-3387"
    },
    "termsOfService": {
      "title": "Terms of service",
      "link": ""
    },
    "privacyPolicy": {},
    "color": "#2b7953",
    "variant": "solid",
    "themeMode": "light",
    "fontFamily": "inter",
    "radius": 1,
    "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/04/21/19/20250421193353-8UHV5E79.css"
  },
  "clientId": "9d7b0ccd-92fb-4597-9545-75939e121dc2",
  "selector": "#webchat"
});
</script>


*/