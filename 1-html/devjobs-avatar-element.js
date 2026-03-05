class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); // Llamada al constructor de la clase base
        this.attachShadow({ mode: 'open' });// Adjunta un Shadow DOM al elemento para encapsular su estilo y estructura
    }

    CreateUrl(service, username) {
        return `https://unavatar.io/${service}/${username}`;
    }

    render() {
        const service = this.getAttribute('service') ?? 'github'; // Obtiene el atributo 'service' o usa 'github' como valor predeterminado
        const username = this.getAttribute('username') ?? 'elvis-crespo'; // Obtiene el atributo 'username' o usa 'default' como valor predeterminado
        const size = this.getAttribute('size') ?? '40'; // Obtiene el atributo 'size' o usa '40' como valor predeterminado

        const url = this.CreateUrl(service, username); // Crea la URL de la imagen de avatar utilizando el servicio y el nombre de usuario

        this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                }
            </style>
          <img
            src="${url}"
            alt="Avatar de ${username}"
            class="avatar"
          />
        `;
    }

    connectedCallback() { // Este método se llama cuando el elemento se agrega al DOM
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);