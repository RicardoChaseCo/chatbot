import { useEffect } from 'react';

export default function ChatInput() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://gbs-druidapc.siemens.com.cn/druid_webchat.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // Rest of your component
    <h1>22</h1>
}
