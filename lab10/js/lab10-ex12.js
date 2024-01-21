document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector("#speak").addEventListener('click', () => {
    //     const utterance = new SpeechSynthesisUtterance("Hey there buddy");

    //     speechSynthesis.speak(utterance);
    // });

    let englishVoices;

    window.speechSynthesis.addEventListener('voiceschanged', function () {
        let select = document.querySelector("#voices");
        // get array of available voices for this computer+browser
        let voices = this.getVoices();

        // filter them so only have the english voices
        englishVoices = voices.filter( voice => voice.lang.includes('en'));

        // populate the list only the first time in
        if (select.childElementCount == 1) {
            englishVoices.forEach( (voice) => {
                let opt = document.createElement("option");
                opt.setAttribute("value", voice.name)
                opt.textContent = voice.name + ' [' + voice.lang + ']';
                select.appendChild(opt);
            });
        }
    });

    // now add event handler for speak button
    document.querySelector('#speak').addEventListener('click', (e) => {
        // get the text to say and the voice options from form
        let message = document.querySelector('textarea').value;
        let selectedVoice = document.querySelector('#voices').value;

        // create utterance and give it text to speak
        let utterance = new SpeechSynthesisUtterance(message);

        // set the speech options (voice, rate, pitch)
        utterance.voice = englishVoices.find(voice => voice.name === selectedVoice);
        utterance.rate = document.querySelector('#rate').value;
        utterance.pitch = document.querySelector('#pitch').value;

        console.log(utterance)

        // all ready, make it speak
        window.speechSynthesis.speak(utterance);
    });
});