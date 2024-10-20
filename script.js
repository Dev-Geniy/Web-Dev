const backgrounds = [
    'https://iili.io/23jc5Yb.jpg', 
    'https://iili.io/23w2f9f.jpg', 
    'https://iili.io/23jcljV.jpg',
    'https://iili.io/23jVNUP.jpg',
    'https://iili.io/23jcBp4.jpg', 
    'https://iili.io/23jiAve.jpg', 
    'https://iili.io/23jcM6F.md.jpg',
    'https://iili.io/23w22Fn.jpg', 
    'https://iili.io/23jcW3g.jpg', 
    'https://iili.io/23jVvOg.jpg',
    'https://iili.io/23jc34n.jpg'
];

let currentBackground = 0;
const backgroundElement = document.querySelector('.background');

function changeBackground() {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    backgroundElement.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}
setInterval(changeBackground, 10000);
changeBackground();

const icons = document.querySelectorAll('.icon');
const infoContent = document.getElementById('info');
const infoContainer = document.querySelector('.info-container');

const infoData = {
    "HTML": `
        <h2>HTML (HyperText Markup Language)</h2>
        <p>HTML is the standard language for creating web pages. It defines the structure of a web page.</p>
    `,
    "CSS": `
        <h2>CSS (Cascading Style Sheets)</h2>
        <p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media. It can control the layout of multiple web pages at once.</p>
    `,
    "JS": `
        <h2>JavaScript (JS)</h2>
        <p>JavaScript is a programming language commonly used to create interactive effects within web browsers. It can manipulate both HTML and CSS to build dynamic, interactive websites.</p>
    `
};

icons.forEach(icon => {
    icon.addEventListener('click', function() {
       
        icons.forEach(i => i.classList.remove('active', 'selected', 'pink', 'purple', 'orange'));

        this.classList.add('active');

        
        const colors = ['pink', 'purple', 'orange'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.classList.add('selected', randomColor);

        const language = this.getAttribute('data-lang');
        infoContent.innerHTML = infoData[language];
 infoContainer.classList.add('active');

        setTimeout(() => {
            this.classList.remove('active');
        }, 1000);
    });
});

const fullscreenModal = document.getElementById('fullscreenModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModalBtn = document.getElementById('closeModal');

const detailedInfo = {
    "HTML": {
        logo: "https://cdn1.iconfinder.com/data/icons/social-media-vol-3-1/24/_html_five-512.png",
        description: `
            <h2>(HyperText Markup Language)</h2>
            <p>HTML is the standard markup language for creating web pages. It defines the structure of a web page and is a cornerstone of web development.</p>
            <h3>Key Features and Tricks:</h3>
            <ul>
                <li><strong>Semantic Elements:</strong> Utilize semantic elements such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> to enhance accessibility and improve SEO.</li>
                <li><strong>Responsive Images:</strong> Use the <code>srcset</code> attribute to provide responsive images that adapt to different device resolutions, improving load times and user experience.</li>
                <li><strong>Forms and Input Types:</strong> Familiarize yourself with various input types like <code>&lt;input type="email"&gt;</code> and <code>&lt;input type="date"&gt;</code> for better user experience and automatic data validation.</li>
                <li><strong>Accessibility:</strong> Implement <code>alt</code> attributes for images and <code>aria-*</code> attributes to enhance accessibility for users with disabilities.</li>
                <li><strong>HTML5 Features:</strong> Explore HTML5 features like <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, and <code>&lt;canvas&gt;</code> for rich multimedia experiences.</li>
                <li><strong>Meta Tags:</strong> Utilize meta tags for SEO, including <code>&lt;meta name="description"&gt;</code> and <code>&lt;meta name="viewport"&gt;</code>, to improve search visibility and mobile responsiveness.</li>
                <li><strong>Microdata and Schema.org:</strong> Implement microdata and Schema.org markup to enhance SEO and increase visibility in search engine results.</li>
            </ul>
            <h3>Best Practices:</h3>
            <ul>
                <li>Keep HTML structure clean and well-organized for better maintainability.</li>
                <li>Validate HTML code to ensure it meets standards and functions correctly across different browsers.</li>
                <li>Comment your code for clarity and ease of understanding.</li>
            </ul>
        `
    },
    "CSS": {
        logo: "https://cdn4.iconfinder.com/data/icons/logos-4/24/CSS-3-512.png",
        description: `
            <h2>(Cascading Style Sheets)</h2>
            <p>CSS is used to describe how HTML elements should be displayed on screens, paper, or in other media. It enhances the aesthetic appeal and usability of web pages.</p>
            <h3>Key Features and Tricks:</h3>
            <ul>
                <li><strong>Flexbox and Grid:</strong> Use Flexbox and CSS Grid to create responsive and complex layouts effortlessly.</li>
                <li><strong>CSS Variables:</strong> Implement CSS variables (e.g., <code>--primary-color</code>) for easier management of colors and styles throughout your stylesheets.</li>
                <li><strong>Animations:</strong> Learn about animations and transitions using <code>@keyframes</code> and <code>transition</code> properties to enhance user interaction.</li>
                <li><strong>Media Queries:</strong> Utilize media queries to adapt styles for various devices and screen sizes, ensuring a consistent user experience.</li>
                <li><strong>Pseudo-classes and Pseudo-elements:</strong> Discover how to use pseudo-classes (<code>:hover</code>, <code>:focus</code>) and pseudo-elements (<code>::before</code>, <code>::after</code>) to improve interactivity.</li>
                <li><strong>Responsive Design:</strong> Understand responsive design principles to create web pages that look great on all devices.</li>
                <li><strong>CSS Frameworks:</strong> Consider using CSS frameworks (e.g., Bootstrap, Tailwind) to accelerate development and ensure cross-browser compatibility.</li>
            </ul>
            <h3>Best Practices:</h3>
            <ul>
                <li>Organize your CSS with a consistent naming convention for easier maintenance.</li>
                <li>Avoid inline styles to keep the separation of concerns between structure and style.</li>
                <li>Use shorthand properties where possible to reduce file size and improve readability.</li>
            </ul>
        `
    },
    "JS": {
        logo: "https://cdn4.iconfinder.com/data/icons/graphic-design-24/48/Graphic_Design-100-512.png",
        description: `
            <h2>(JavaScript)</h2>
            <p>JavaScript is a programming language commonly used to create interactive effects and dynamic content within web browsers. It enhances user engagement and interactivity.</p>
            <h3>Key Features and Tricks:</h3>
            <ul>
                <li><strong>Asynchronous Programming:</strong> Learn asynchronous programming with <code>Promise</code> and <code>async/await</code> for working with APIs and handling data effectively.</li>
                <li><strong>Event Delegation:</strong> Optimize performance by using event delegation to attach event handlers to parent elements, reducing the number of event listeners.</li>
                <li><strong>DOM Manipulation:</strong> Utilize methods like <code>document.querySelector()</code> and <code>document.createElement()</code> for dynamic changes to the DOM, enhancing interactivity.</li>
                <li><strong>Local Storage:</strong> Store data on the client side using <code>localStorage</code> and <code>sessionStorage</code> to maintain user preferences and session data.</li>
                <li><strong>Frameworks and Libraries:</strong> Explore popular libraries and frameworks like React, Vue, and Angular to simplify the development of complex applications.</li>
                <li><strong>Testing:</strong> Use testing tools like Jest and Mocha to ensure the quality and reliability of your code through automated testing.</li>
                <li><strong>APIs:</strong> Familiarize yourself with utilizing external APIs and integrating them into your application to access and manipulate data seamlessly.</li>
            </ul>
            <h3>Best Practices:</h3>
            <ul>
                <li>Write modular code to enhance readability and maintainability.</li>
                <li>Use strict mode (<code>'use strict';</code>) to enforce better coding practices and catch common mistakes.</li>
                <li>Document your code and use meaningful variable names for better clarity.</li>
            </ul>
        `
    }
};

infoContainer.addEventListener('click', function() {
    const language = icons[Array.from(icons).findIndex(icon => icon.classList.contains('selected'))].getAttribute('data-lang');

    modalTitle.innerHTML = language;
    modalDescription.innerHTML = detailedInfo[language].description;
    modalIcon.src = detailedInfo[language].logo;

    fullscreenModal.style.display = "block";
});

closeModalBtn.addEventListener('click', function() {
    fullscreenModal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == fullscreenModal) {
        fullscreenModal.style.display = "none";
    }
});

icons.forEach(icon => {
    icon.addEventListener('click', function() {
        icons.forEach(i => i.classList.remove('active', 'selected', 'pink', 'purple', 'orange'));

        this.classList.add('active');

        const colors = ['pink', 'purple', 'orange'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.classList.add('selected', randomColor);

        const language = this.getAttribute('data-lang');
        infoContent.innerHTML = infoData[language];
        infoContainer.classList.add('active');

        const arrow = document.getElementById('arrow');
        arrow.style.opacity = '1';

        setTimeout(() => {
            this.classList.remove('active');
        }, 1000);
    });
});
