var domain;

if (process.env.NODE_ENV === 'production') {
    domain= 'nutrifit-neon.vercel.app/api'
} else {
    domain= 'http://localhost:3000/api'
}

export default domain;