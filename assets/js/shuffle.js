/*
Shuffle images randomly on to the page.
Put images in (default) /images/shuffle.
Will match webp, jpg, and png images.
Images will be inserted into img tags with a data-shuffle parameter when the page is loaded.

Default shuffle matching string can be overriden in front-matter, eg

shufflematch: "images/my-custom-shuffle/*.{jpg,webp}"
*/

window.addEventListener('load', (event) => {
    const VERSION = "1.1";
    console.log('shuffle.js ' + VERSION + ' Copyright (c) 2022 claycle.com');
    var startProductBarPos = -1;
    //console.log("Today: {{ .Date }}, Title {{ site.Title }}");
});

window.addEventListener('load', (event) => {
    // Locate all the data-shuffle images
    let elements = document.querySelectorAll("[data-shuffle]");
    // Fetch an image for this shuffle
    // Images located with /images/shuffle
    // .Resources.ByType "image" //
    // resources.Match "images/shuffle/*"
    let deck = [];
    {{ $shufflematch := "images/shuffle/{*.jpg,*.png,*.webp}"}}
    {{ with .Params.shufflematch }}
    {{ $shufflematch = . }}
    {{ end }}
    {{ range resources.Match $shufflematch }}
    deck.push("{{ .RelPermalink }}");
    {{ end }}
    let shuffled = [];

    // function shuffleArray(arr) {
    //   arr.sort(() => Math.random() - 0.5);
    // }

    elements.forEach(el => {
        //console.log(el);
        if (shuffled.length === 0) {
            shuffled = deck.slice().sort(() => Math.random() - 0.5);
        }
        // Pop the top element
        let i = shuffled.pop();
        el.src = i;
    });
});
