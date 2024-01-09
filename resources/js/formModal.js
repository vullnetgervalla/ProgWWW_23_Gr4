document.getElementById('volunteerButton').addEventListener('click', () => {
    createModal()

    document.getElementById('closeCanvas').addEventListener('click', () => {
        const modal = document.getElementById('form-modal')
        document.body.removeChild(modal)
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modal = document.getElementById('form-modal')
            document.body.removeChild(modal)
        }
    })

    document.getElementById('form-modal').addEventListener('click', () => {
        const modal = document.getElementById('form-modal')
        document.body.removeChild(modal)
    })

    document.getElementById('form-modal-content').addEventListener('click', (event) => {
        event.stopPropagation()
    })

})

function createModal() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.id = 'form-modal'
    modal.innerHTML = `
        <div id="form-modal-content"  class="modal-content">
            <div class="modal-header">
                <h2>
                    Join our team of volunteers!
                </h2>
                <canvas id="closeCanvas" class="close-canvas"></canvas>
            </div>
            <p>
                We are always looking for volunteers to help us with our mission. If you are interested in volunteering,
                please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form action="https://formspree.io/f/xdorzqer" method="POST">
                <table class="form-table">
                    <tr class="first-row">
                        <td>
                            <div class="flex flex-column">        
                                <label for="firstname">First Name</label>
                                <input type="text" id="firstname" name="firstname" required>
                            </div>                                    
                        </td>
                        <td>
                            <div class="flex flex-column">
                                <label for="lastname">Last Name</label>
                                <input type="text" id="lastname" name="lastname" required>
                            </div>
                        </td>
                    </tr>
                    <tr class="second-row">
                        <td colspan="2">
                            <div class="flex flex-column">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                        </td>
                    </tr>
                    <tr class="third-row">
                        <td colspan="2">
                            <div class="flex flex-column">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Type your Message"></textarea>
                            </div>        
                        </td>
                    </tr>
                </table>
                <input type="submit" value="Send message">
            </form>
        </div>
    `

    document.body.appendChild(modal)
    
    //Draw the close button 'X'
    const canvass = document.getElementById('closeCanvas')
    const ctx = canvass.getContext('2d')
    
    canvass.width = 50
    canvass.height = 50

    ctx.lineWidth = 3
    ctx.strokeStyle = '#fff'

    ctx.beginPath()
    ctx.moveTo(15, 15)
    ctx.lineTo(35, 35)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(35, 15)
    ctx.lineTo(15, 35)
    ctx.stroke()

}