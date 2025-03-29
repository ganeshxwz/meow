// Sample NFT data
const featuredNFT = {
    image: 'https://placekitten.com/400/500',
    title: 'Digital Decade',
    artist: 'CryptoKitty',
    price: '2.5 ETH',
    likes: '50k'
};

const popularNFTs = [
    {
        image: 'https://placekitten.com/300/300',
        title: 'Cyber Cat',
        artist: 'DigitalArtist',
        price: '1.2 ETH'
    },
    {
        image: 'https://placekitten.com/301/301',
        title: 'Neon Whiskers',
        artist: 'CryptoCreator',
        price: '0.8 ETH'
    },
    {
        image: 'https://placekitten.com/302/302',
        title: 'Pixel Purr',
        artist: 'BlockchainArt',
        price: '1.5 ETH'
    },
    {
        image: 'https://placekitten.com/303/303',
        title: 'Virtual Kitten',
        artist: 'NFTMaster',
        price: '2.0 ETH'
    }
];

const topSellers = [
    {
        avatar: 'https://placekitten.com/100/100',
        name: 'Leighton Kramer',
        sales: '276.7 ETH'
    },
    {
        avatar: 'https://placekitten.com/101/101',
        name: 'Haylie Arcand',
        sales: '245.6 ETH'
    },
    {
        avatar: 'https://placekitten.com/102/102',
        name: 'Bowen Higgins',
        sales: '233.7 ETH'
    }
];

const categories = [
    {
        title: 'Abstract',
        image: 'https://placekitten.com/400/300',
        items: '35 items'
    },
    {
        title: '3D Art',
        image: 'https://placekitten.com/401/300',
        items: '45 items'
    },
    {
        title: 'Modern Art',
        image: 'https://placekitten.com/402/300',
        items: '15 items'
    },
    {
        title: 'Game',
        image: 'https://placekitten.com/403/300',
        items: '25 items'
    },
    {
        title: 'Graffiti',
        image: 'https://placekitten.com/404/300',
        items: '35 items'
    },
    {
        title: 'Watercolor',
        image: 'https://placekitten.com/405/300',
        items: '45 items'
    }
];

// Function to create featured NFT card
function createFeaturedNFT() {
    const featuredCard = document.querySelector('.featured-card');
    featuredCard.innerHTML = `
        <img src="${featuredNFT.image}" alt="${featuredNFT.title}">
        <div class="card-info">
            <h3>${featuredNFT.title}</h3>
            <p>by ${featuredNFT.artist}</p>
            <div class="price-info">
                <span class="price">${featuredNFT.price}</span>
                <span class="likes"><i class="fas fa-heart"></i> ${featuredNFT.likes}</span>
            </div>
        </div>
    `;
}

// Function to create popular NFT cards
function createPopularNFTs() {
    const cardsGrid = document.querySelector('.cards-grid');
    cardsGrid.innerHTML = popularNFTs.map(nft => `
        <div class="nft-card">
            <img src="${nft.image}" alt="${nft.title}">
            <div class="card-info">
                <h3>${nft.title}</h3>
                <p>by ${nft.artist}</p>
                <div class="price-info">
                    <span class="price">${nft.price}</span>
                    <button class="bid-btn">Place Bid</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to create top sellers
function createTopSellers() {
    const sellersGrid = document.querySelector('.sellers-grid');
    sellersGrid.innerHTML = topSellers.map(seller => `
        <div class="seller-card">
            <img src="${seller.avatar}" alt="${seller.name}">
            <div class="seller-info">
                <h4>${seller.name}</h4>
                <p>${seller.sales}</p>
            </div>
        </div>
    `).join('');
}

// Function to create category cards
function createCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card">
            <img src="${category.image}" alt="${category.title}">
            <div class="category-info">
                <h3>${category.title}</h3>
                <p>${category.items}</p>
            </div>
        </div>
    `).join('');
}

// Initialize the marketplace
document.addEventListener('DOMContentLoaded', () => {
    createFeaturedNFT();
    createPopularNFTs();
    createTopSellers();
    createCategories();

    // Video player functionality
    const video = document.querySelector('.hero-video');
    const playBtn = document.querySelector('.play-btn');
    
    if (playBtn && video) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.innerHTML = '<span class="play-icon">❚❚</span>';
            } else {
                video.pause();
                playBtn.innerHTML = '<span class="play-icon">▶</span>';
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Random cat facts
    const catFacts = [
        "Cats spend 70% of their lives sleeping",
        "A cat's nose print is unique, just like a human's fingerprint",
        "Cats can't taste sweetness",
        "A group of cats is called a clowder",
        "Cats can jump up to six times their length",
        "A cat's whiskers help them determine if they can fit through a space",
        "Cats have an extra organ that allows them to taste scents in the air",
        "A cat can sprint at about 31 miles per hour"
    ];

    // Add random cat fact to hero section
    function addRandomCatFact() {
        const factElement = document.createElement('div');
        factElement.className = 'cat-fact';
        factElement.textContent = catFacts[Math.floor(Math.random() * catFacts.length)];
        document.querySelector('.hero-content').appendChild(factElement);
    }

    // Change cat fact every 10 seconds
    addRandomCatFact();
    setInterval(addRandomCatFact, 10000);

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in animation to sections
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Elements
    const gallery = document.querySelector('.gallery-grid');
    const filterLinks = document.querySelectorAll('.nav-links a');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeButton = document.querySelector('.close');

    // Filter gallery items
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');

            // Update active state
            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Filter items
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.6s ease-out forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('.gallery-item img').forEach(img => {
            imageObserver.observe(img);
        });
    }
}); 