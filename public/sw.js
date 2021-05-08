  
let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/index.html',
                '/',
                '/static/media/dots-menu.11ede405.png',
                '/static/media/elena-joland-t3-HSj2or-k-unsplash@2x.559381f8.png',
                '/static/media/jude-beck-6tuHPZHGajQ-unsplash@2x.cff47128.png',
                '/static/media/martin-brechtl-ogiCH04kNGI-unsplash@2x.9474c200.png',
                '/static/media/phillip-larking-G7zQ_y2cSGk-unsplash@2x.f7ece3c9.png',
                '/static/media/logo.png'

            ])
        })
    )
})


this.addEventListener("fetch", (event) => {


    // console.warn("url",event.request.url)


    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 
