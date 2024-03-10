let domain;

async function fetchDomain() {
    if (process.env.NODE_ENV === 'production') {
        // Use the domain from environment variable in production and append /api
        domain = `${process.env.VERCEL_URL}/api`;
    } else {
        // Use localhost domain for development
        domain = 'http://localhost:3000/api';
    }
}

// Call the function to fetch the domain
fetchDomain();


export default domain;
