document.getElementById('mainVideo').addEventListener('click', () => {
    createVideoModal()

    document.getElementById('video-modal').addEventListener('click', () => {
        const modal = document.getElementById('video-modal')
        document.body.removeChild(modal)
    })

    document.getElementById('videoPlayer').addEventListener('click', (event) => {
        event.stopPropagation()
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modal = document.getElementById('video-modal')
            document.body.removeChild(modal)
        }
    })
})

function createVideoModal() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.id = 'video-modal'
    modal.innerHTML = `
        <video id="videoPlayer" autoplay controls>
            <source src="resources/images/home/mainVideo.mp4" type="video/mp4">

            Your browser does not support HTML5 video.
        </video>
    `
    document.body.appendChild(modal)
}