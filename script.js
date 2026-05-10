/**
 * Football Pulse - Interactive JavaScript
 * Dark-themed football sports website
 */

// ================================================
// Data Section
// ================================================

// Live Scores Data
const liveScores = [
    { home: 'CHE', away: 'LIV', homeScore: 2, awayScore: 2, time: 'FT', status: 'finished', league: 'Premier League' },
    { home: 'RMA', away: 'BAR', homeScore: 1, awayScore: 1, time: '67\'', status: 'live', league: 'La Liga' },
    { home: 'BAY', away: 'DOR', homeScore: 3, awayScore: 1, time: 'FT', status: 'finished', league: 'Bundesliga' },
    { home: 'JUV', away: 'ACM', homeScore: 0, awayScore: 0, time: '33\'', status: 'live', league: 'Serie A' },
    { home: 'PSG', away: 'ASM', homeScore: 2, awayScore: 0, time: '72\'', status: 'live', league: 'Ligue 1' },
    { home: 'MCI', away: 'ARS', homeScore: 1, awayScore: 0, time: 'FT', status: 'finished', league: 'Premier League' },
    { home: 'ATM', away: 'SEV', homeScore: 0, awayScore: 0, time: '55\'', status: 'live', league: 'La Liga' },
];

// Team logos (placeholder URLs - using flag emojis as alternatives)
const teamLogos = {
    CHE: 'https://ssl.gstatic.com/onebox/media/logos/48px/chelsea-fc_logo_icon_48px.png',
    LIV: 'https://ssl.gstatic.com/onebox/media/logos/48px/liverpool-fc_logo_icon_48px.png',
    RMA: 'https://ssl.gstatic.com/onebox/media/logos/48px/real-madrid_logo_icon_48px.png',
    BAR: 'https://ssl.gstatic.com/onebox/media/logos/48px/fc-barcelona_logo_icon_48px.png',
    BAY: 'https://ssl.gstatic.com/onebox/media/logos/48px/bayern-munich_logo_icon_48px.png',
    DOR: 'https://ssl.gstatic.com/onebox/media/logos/48px/borussia-dortmund_logo_icon_48px.png',
    JUV: 'https://ssl.gstatic.com/onebox/media/logos/48px/juventus_logo_icon_48px.png',
    ACM: 'https://ssl.gstatic.com/onebox/media/logos/48px/ac-milan_logo_icon_48px.png',
    PSG: 'https://ssl.gstatic.com/onebox/media/logos/48px/psg_logo_icon_48px.png',
    ASM: 'https://ssl.gstatic.com/onebox/media/logos/48px/as-monaco_logo_icon_48px.png',
    MCI: 'https://ssl.gstatic.com/onebox/media/logos/48px/manchester-city_logo_icon_48px.png',
    ARS: 'https://ssl.gstatic.com/onebox/media/logos/48px/arsenal-fc_logo_icon_48px.png',
    ATM: 'https://ssl.gstatic.com/onebox/media/logos/48px/club-atletico-maidrid_logo_icon_48px.png',
    SEV: 'https://ssl.gstatic.com/onebox/media/logos/48px/sevilla-fc_logo_icon_48px.png',
    TOT: 'https://ssl.gstatic.com/onebox/media/logos/48px/tottenham_logo_icon_48px.png',
    MUN: 'https://ssl.gstatic.com/onebox/media/logos/48px/manchester-united_logo_icon_48px.png',
    NEW: 'https://ssl.gstatic.com/onebox/media/logos/48px/newcastle_logo_icon_48px.png',
    VIL: 'https://ssl.gstatic.com/onebox/media/logos/48px/villarreal_logo_icon_48px.png',
    LEV: 'https://ssl.gstatic.com/onebox/media/logos/48px/leverkusen_logo_icon_48px.png',
    NAP: 'https://ssl.gstatic.com/onebox/media/logos/48px/napoli_logo_icon_48px.png',
    INT: 'https://ssl.gstatic.com/onebox/media/logos/48px/inter-milan_logo_icon_48px.png',
};

// Articles Data
const articles = [
    {
        id: 1,
        title: 'Haaland\'s Record-Breaking Season: The Making of a New Legend',
        excerpt: 'Manchester City\'s prolific striker continues to rewrite the history books with unprecedented goal-scoring form that has left the football world in awe.',
        category: 'premier-league',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
        author: 'Marcus Vane',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        date: 'May 9, 2026',
        readTime: '8 min read',
        featured: true
    },
    {
        id: 2,
        title: 'Barcelona\'s Renaissance: How Hansi Flick Transformed the Blaugrana',
        excerpt: 'A tactical masterclass in Catalonia as the German coach brings back the beautiful game to Camp Nou.',
        category: 'la-liga',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=800&q=80',
        author: 'Marcus Vane',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        date: 'May 8, 2026',
        readTime: '6 min read',
        featured: false
    },
    {
        id: 3,
        title: 'The Art of the Low Block: Defensive Football Reimagined',
        excerpt: 'An in-depth analysis of how modern teams are perfecting the art of parking the bus.',
        category: 'analysis',
        image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80',
        author: 'Marcus Vane',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        date: 'May 7, 2026',
        readTime: '10 min read',
        featured: false
    },
    {
        id: 4,
        title: 'PSG\'s Champions League Dream: The Final Push',
        excerpt: 'As the Parisian giants eye European glory, we examine their path to the final.',
        category: 'champions',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80',
        author: 'Marcus Vane',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        date: 'May 6, 2026',
        readTime: '7 min read',
        featured: false
    },
    {
        id: 5,
        title: 'Rising Stars: The Next Generation of Football Greats',
        excerpt: 'From Yamal to Bellingham, profiling the young talents set to dominate the next decade.',
        category: 'premier-league',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
        author: 'Marcus Vane',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        date: 'May 5, 2026',
        readTime: '9 min read',
        featured: false
    },
    {
        id: 6,
        title: 'Transfer Window Preview: Top 10 Moves to Watch This Summer',
        excerpt: 'The transfer market is heating up. Here are the deals that could reshape the European landscape.',
        category: 'transfer',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
        author: 'Marcus Vane',
        authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        date: 'May 4, 2026',
        readTime: '5 min read',
        featured: false
    }
];

// Trending Topics
const trendingTopics = [
    { rank: 1, title: 'Haaland scores 5 goals in historic performance', views: '2.4M', category: 'Premier League' },
    { rank: 2, title: 'Barcelona vs Real Madrid: El Clasico date confirmed', views: '1.8M', category: 'La Liga' },
    { rank: 3, title: 'Mbappé PSG departure: Where next?', views: '1.5M', category: 'Transfer' },
    { rank: 4, title: 'Champions League semi-finals preview', views: '1.2M', category: 'Champions League' },
    { rank: 5, title: 'Premier League title race: Who will win?', views: '980K', category: 'Premier League' },
    { rank: 6, title: 'New stadium plans revealed for North London', views: '750K', category: 'Premier League' },
];

// Matches Data
const matches = {
    'all': [
        { home: 'CHE', away: 'TOT', homeScore: 2, awayScore: 1, time: '16:00', status: 'scheduled', league: 'Premier League', venue: 'Stamford Bridge', date: 'Today' },
        { home: 'MCI', away: 'ARS', homeScore: null, awayScore: null, time: '20:30', status: 'scheduled', league: 'Premier League', venue: 'Etihad Stadium', date: 'Today' },
        { home: 'RMA', away: 'SEV', homeScore: 3, awayScore: 1, time: 'FT', status: 'finished', league: 'La Liga', venue: 'Santiago Bernabéu', date: 'Today' },
        { home: 'BAR', away: 'VIL', homeScore: null, awayScore: null, time: '21:00', status: 'scheduled', league: 'La Liga', venue: 'Camp Nou', date: 'Today' },
        { home: 'BAY', away: 'DOR', homeScore: 4, awayScore: 2, time: 'FT', status: 'finished', league: 'Bundesliga', venue: 'Allianz Arena', date: 'Today' },
    ],
    'premier-league': [
        { home: 'CHE', away: 'TOT', homeScore: 2, awayScore: 1, time: '16:00', status: 'scheduled', league: 'Premier League', venue: 'Stamford Bridge', date: 'Today' },
        { home: 'MCI', away: 'ARS', homeScore: null, awayScore: null, time: '20:30', status: 'scheduled', league: 'Premier League', venue: 'Etihad Stadium', date: 'Today' },
        { home: 'LIV', away: 'NEW', homeScore: null, awayScore: null, time: '18:30', status: 'scheduled', league: 'Premier League', venue: 'Anfield', date: 'Today' },
    ],
    'la-liga': [
        { home: 'RMA', away: 'SEV', homeScore: 3, awayScore: 1, time: 'FT', status: 'finished', league: 'La Liga', venue: 'Santiago Bernabéu', date: 'Today' },
        { home: 'BAR', away: 'VIL', homeScore: null, awayScore: null, time: '21:00', status: 'scheduled', league: 'La Liga', venue: 'Camp Nou', date: 'Today' },
        { home: 'ATM', away: 'LEB', homeScore: null, awayScore: null, time: '19:00', status: 'scheduled', league: 'La Liga', venue: 'Metropolitano', date: 'Today' },
    ],
    'champions-league': [
        { home: 'BAR', away: 'PSG', homeScore: 2, awayScore: 2, time: 'AET', status: 'finished', league: 'Champions League', venue: 'Camp Nou', date: 'May 8' },
        { home: 'RMA', away: 'BAY', homeScore: null, awayScore: null, time: '20:00', status: 'scheduled', league: 'Champions League', venue: 'Bernabéu', date: 'May 14' },
    ]
};

// Standings Data
const standings = {
    'premier-league': [
        { pos: 1, team: 'Liverpool', played: 34, won: 24, drawn: 7, lost: 3, pts: 79 },
        { pos: 2, team: 'Arsenal', played: 34, won: 21, drawn: 8, lost: 5, pts: 71 },
        { pos: 3, team: 'Manchester City', played: 33, won: 20, drawn: 7, lost: 6, pts: 67 },
        { pos: 4, team: 'Newcastle', played: 34, won: 18, drawn: 10, lost: 6, pts: 64 },
        { pos: 5, team: 'Chelsea', played: 34, won: 17, drawn: 9, lost: 8, pts: 60 },
        { pos: 6, team: 'Aston Villa', played: 34, won: 16, drawn: 8, lost: 10, pts: 56 },
    ],
    'la-liga': [
        { pos: 1, team: 'Barcelona', played: 33, won: 22, drawn: 6, lost: 5, pts: 72 },
        { pos: 2, team: 'Real Madrid', played: 33, won: 21, drawn: 6, lost: 6, pts: 69 },
        { pos: 3, team: 'Atlético Madrid', played: 33, won: 18, drawn: 8, lost: 7, pts: 62 },
        { pos: 4, team: 'Athletic Bilbao', played: 34, won: 16, drawn: 10, lost: 8, pts: 58 },
    ],
    'serie-a': [
        { pos: 1, team: 'Napoli', played: 33, won: 22, drawn: 6, lost: 5, pts: 72 },
        { pos: 2, team: 'Inter Milan', played: 33, won: 21, drawn: 5, lost: 7, pts: 68 },
        { pos: 3, team: 'Atalanta', played: 34, won: 19, drawn: 7, lost: 8, pts: 64 },
        { pos: 4, team: 'Juventus', played: 33, won: 17, drawn: 11, lost: 5, pts: 62 },
    ]
};

// Transfer News
const transfers = [
    { type: 'Confirmed', team1: 'FC Barcelona', team1Logo: 'https://ssl.gstatic.com/onebox/media/logos/48px/fc-barcelona_logo_icon_48px.png', team2: 'Villarreal', team2Logo: 'https://ssl.gstatic.com/onebox/media/logos/48px/villarreal_logo_icon_48px.png', fee: '€45M', time: '2 hours ago' },
    { type: 'Confirmed', team1: 'Bayern Munich', team1Logo: 'https://ssl.gstatic.com/onebox/media/logos/48px/bayern-munich_logo_icon_48px.png', team2: 'Leverkusen', team2Logo: 'https://ssl.gstatic.com/onebox/media/logos/48px/leverkusen_logo_icon_48px.png', fee: '€60M', time: '5 hours ago' },
    { type: 'Rumored', team1: 'Manchester United', team1Logo: 'https://ssl.gstatic.com/onebox/media/logos/48px/manchester-united_logo_icon_48px.png', team2: 'Porto', team2Logo: '', fee: '€80M', time: '1 day ago' },
];

// Editor Posts
const editorPosts = [
    { category: 'Tactical Analysis', title: 'How Teams Are Breaking the High Line', date: 'May 8, 2026', image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&q=80' },
    { category: 'Opinion', title: 'The Transfer Market Has Gone Mad', date: 'May 6, 2026', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80' },
    { category: 'Feature', title: 'A Season in the Life of a Premier League Doctor', date: 'May 3, 2026', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80' },
];

// ================================================
// Initialization
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLiveScores();
    initArticles();
    initTrending();
    initMatchCenter();
    initStandings();
    initTransfers();
    initEditorial();
    initNewsletter();
    initBackToTop();
    initMobileMenu();
});

// ================================================
// Navigation
// ================================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// ================================================
// Live Scores
// ================================================

function initLiveScores() {
    const scoresScroll = document.getElementById('scoresScroll');
    if (!scoresScroll) return;
    
    scoresScroll.innerHTML = liveScores.map(match => `
        <div class="score-item">
            <div class="score-team">
                <img src="${teamLogos[match.home] || ''}" alt="${match.home}" class="score-team-logo" onerror="this.style.display='none'">
                <span>${match.home}</span>
            </div>
            <span class="score-result ${match.status === 'live' ? 'live' : ''}">${match.homeScore} - ${match.awayScore}</span>
            <div class="score-team">
                <span>${match.away}</span>
                <img src="${teamLogos[match.away] || ''}" alt="${match.away}" class="score-team-logo" onerror="this.style.display='none'">
            </div>
            <span class="score-time">${match.time}</span>
        </div>
    `).join('');
}

// ================================================
// Articles
// ================================================

function initArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = articles.map(article => `
        <article class="article-card ${article.featured ? 'featured' : ''}">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" class="article-img">
                <div class="article-image-overlay"></div>
                <div class="article-category">
                    <span class="tag category-${article.category}">${article.category.replace('-', ' ')}</span>
                </div>
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <img src="${article.authorImg}" alt="${article.author}" class="article-author-img">
                    <span>${article.author}</span>
                    <span>•</span>
                    <span>${article.date}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// ================================================
// Trending
// ================================================

function initTrending() {
    const trendingList = document.getElementById('trendingList');
    if (!trendingList) return;
    
    trendingList.innerHTML = trendingTopics.map(topic => `
        <div class="trending-item">
            <span class="trending-rank">${topic.rank}</span>
            <div class="trending-content">
                <h4 class="trending-title">${topic.title}</h4>
                <span class="trending-meta">${topic.views} views • ${topic.category}</span>
            </div>
        </div>
    `).join('');
}

// ================================================
// Match Center
// ================================================

function initMatchCenter() {
    const matchCards = document.getElementById('matchCards');
    const matchTabs = document.getElementById('matchTabs');
    
    if (!matchCards || !matchTabs) return;
    
    // Render initial matches
    renderMatches('all');
    
    // Tab click handlers
    matchTabs.querySelectorAll('.match-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            matchTabs.querySelectorAll('.match-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderMatches(tab.dataset.league);
        });
    });
    
    function renderMatches(league) {
        const leagueMatches = matches[league] || matches['all'];
        
        matchCards.innerHTML = leagueMatches.map(match => `
            <div class="match-card">
                <div class="match-info">
                    <div class="match-teams">
                        <div class="match-team">
                            <img src="${teamLogos[match.home] || ''}" alt="${match.home}" class="match-team-logo" onerror="this.style.display='none'">
                            <span class="match-team-name">${match.home}</span>
                        </div>
                        <div class="match-score">
                            ${match.homeScore !== null ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                        </div>
                        <div class="match-team">
                            <span class="match-team-name">${match.away}</span>
                            <img src="${teamLogos[match.away] || ''}" alt="${match.away}" class="match-team-logo" onerror="this.style.display='none'">
                        </div>
                    </div>
                    <div class="match-status ${match.status === 'live' ? 'live' : ''}">
                        ${match.status === 'live' ? 'LIVE NOW' : match.status === 'finished' ? 'FULL TIME' : match.time}
                    </div>
                    <div class="match-venue">${match.venue} • ${match.date}</div>
                </div>
            </div>
        `).join('');
    }
}

// ================================================
// Standings
// ================================================

function initStandings() {
    const standingsTable = document.getElementById('standingsTable');
    const standingsTabs = document.querySelectorAll('.standings-tab');
    
    if (!standingsTable || !standingsTabs.length) return;
    
    // Render initial standings
    renderStandings('premier-league');
    
    // Tab click handlers
    standingsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            standingsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderStandings(tab.dataset.table);
        });
    });
    
    function renderStandings(league) {
        const leagueStandings = standings[league] || standings['premier-league'];
        
        standingsTable.innerHTML = `
            <div class="table-header">
                <span>#</span>
                <span>Team</span>
                <span>P</span>
                <span>Pts</span>
            </div>
            ${leagueStandings.map(team => `
                <div class="table-row ${team.pos <= 4 ? 'top-4' : ''}">
                    <span class="table-position">${team.pos}</span>
                    <div class="table-team">
                        <span class="table-team-name">${team.team}</span>
                    </div>
                    <span class="table-played">${team.played}</span>
                    <span class="table-points">${team.pts}</span>
                </div>
            `).join('')}
        `;
    }
}

// ================================================
// Transfers
// ================================================

function initTransfers() {
    const transfersGrid = document.getElementById('transfersGrid');
    if (!transfersGrid) return;
    
    transfersGrid.innerHTML = transfers.map(transfer => `
        <div class="transfer-card">
            <div class="transfer-header">
                <span class="transfer-type">${transfer.type}</span>
                <span class="transfer-time">${transfer.time}</span>
            </div>
            <div class="transfer-teams">
                <div class="transfer-team">
                    <img src="${transfer.team1Logo}" alt="${transfer.team1}" class="transfer-team-logo" onerror="this.style.display='none'">
                    <span class="transfer-team-name">${transfer.team1}</span>
                </div>
                <svg class="transfer-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
                <div class="transfer-team">
                    <span class="transfer-team-name">${transfer.team2}</span>
                    ${transfer.team2Logo ? `<img src="${transfer.team2Logo}" alt="${transfer.team2}" class="transfer-team-logo" onerror="this.style.display='none'">` : ''}
                </div>
            </div>
            <div class="transfer-fee">${transfer.fee}</div>
        </div>
    `).join('');
}

// ================================================
// Editorial
// ================================================

function initEditorial() {
    const editorPosts = document.getElementById('editorPosts');
    if (!editorPosts) return;
    
    editorPosts.innerHTML = `
        <div class="editor-post">
            <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&q=80" alt="Tactical Analysis" class="editor-post-image">
            <div class="editor-post-content">
                <span class="editor-post-category">Tactical Analysis</span>
                <h4 class="editor-post-title">How Teams Are Breaking the High Line</h4>
                <span class="editor-post-date">May 8, 2026</span>
            </div>
        </div>
        <div class="editor-post">
            <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80" alt="Opinion" class="editor-post-image">
            <div class="editor-post-content">
                <span class="editor-post-category">Opinion</span>
                <h4 class="editor-post-title">The Transfer Market Has Gone Mad</h4>
                <span class="editor-post-date">May 6, 2026</span>
            </div>
        </div>
        <div class="editor-post">
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80" alt="Feature" class="editor-post-image">
            <div class="editor-post-content">
                <span class="editor-post-category">Feature</span>
                <h4 class="editor-post-title">A Season in the Life of a Premier League Doctor</h4>
                <span class="editor-post-date">May 3, 2026</span>
            </div>
        </div>
    `;
}

// ================================================
// Newsletter
// ================================================

function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const input = document.getElementById('emailInput');
    const success = document.getElementById('newsletterSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = input.value.trim();
        
        if (isValidEmail(email)) {
            form.style.display = 'none';
            success.classList.add('show');
        }
    });
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// ================================================
// Back to Top
// ================================================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ================================================
// Mobile Menu
// ================================================

function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ================================================
// Search Modal (Placeholder)
// ================================================

document.getElementById('searchBtn')?.addEventListener('click', () => {
    // Could implement a search modal here
    console.log('Search clicked');
});

console.log('Football Pulse initialized successfully 🚀');