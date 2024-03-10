var domain;

if (process.env.NODE_ENV === 'production') {
    domain= 'https://nutrifit-g12t5pij5-voltas-projects.vercel.app/api'
} else {
    domain= 'http://localhost:3000/api'
}

export default domain;