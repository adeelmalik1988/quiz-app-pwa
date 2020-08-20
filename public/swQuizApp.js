console.log('registered')


var CACHE_NAME = 'quiz-web-new'
var urlsToCache = [
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js',
    '/static/js/main.chunk.js',
    '/main.86455816e5f6ef194701.hot-update.js',
    "index.html",
    '/static/media/generalKnowledge.739e131a.jpg',
    '/static/media/history.0cca963b.jpg',
    '/favicon.ico',
    "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple",
    '/'

]


this.addEventListener('install', (event) => {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache')
                return cache.addAll(urlsToCache)

            })
    )

})





this.addEventListener('fetch', (event) => {
    if (!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        console.log(response)
                        return (response)
                    }
                    return fetch(event.request).then((response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            console.log(response,"fetched from cache")
                            return response;
                        } 
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache)
                        })
                        console.log(response)
                        return response;

                    }).catch((err)=>{
                        console.log('err',err)
                    })

                }

                ).catch((err)=>{
                    console.log('err',err)

                })
        )}

})

