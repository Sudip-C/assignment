

// Simulated API call function
function fetchResults(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = ['apple', 'banana', 'apricot', 'blueberry', 'grape'];
        const filteredResults = results.filter(item => item.includes(query));
        resolve(filteredResults);
      }, 1000); 
    });
  }
  
  // Debounce function
  function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Function to update results in the DOM
  function updateResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result;
      resultsContainer.appendChild(listItem);
    });
  }
  
  // Main function to handle search input
  function handleSearchInput() {
    const searchInput = document.getElementById('search');
    
    const debouncedFetchResults = debounce(async (event) => {
      const query = event.target.value;
      if (query.length > 0) {
        const results = await fetchResults(query);
        updateResults(results);
      } else {
        updateResults([]);
      }
    }, 500); 
  
    searchInput.addEventListener('input', debouncedFetchResults);
  }
  
  
  document.addEventListener('DOMContentLoaded', handleSearchInput);
  