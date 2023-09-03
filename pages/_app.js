import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '64e7494924372e000898cd56' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
