document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('search-query').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    const pages = [
        { name: 'Home', url: 'index.html', content: 'Discover essays, science articles, and literature.' },
        { name: 'Essay', url: 'essay.html', content: 'Content for Essays' },
        { name: 'Science', url: 'science.html', content: 'Content for Science' },
        { name: 'Literature', url: 'literature.html', content: 'Nepali poem and more literature content.' },
        { name: 'Contact', url: 'contact.html', content: 'Contact details of Sudarshan Karki' }
    ];

    const results = pages.filter(page => page.name.toLowerCase().includes(query) || page.content.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h2><a href="${result.url}">${result.name}</a></h2><p>${result.content}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
});
