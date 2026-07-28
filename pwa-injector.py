with open('/root/red_apple_repair/index.html', 'r') as f:
    html = f.read()

pwa_tags = '''
    <link rel="manifest" href="./manifest.json">
    <meta name="theme-color" content="#ff0033">
    <link rel="apple-touch-icon" href="https://www.fixma.in/phonfix/img/fixmaicon.png">
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('PWA Service Worker registered!', reg))
            .catch(err => console.log('PWA Service Worker registration failed:', err));
        });
      }
    </script>
</head>
'''

html = html.replace('</head>', pwa_tags)

with open('/root/red_apple_repair/index.html', 'w') as f:
    f.write(html)
print("PWA tags injected successfully!")
