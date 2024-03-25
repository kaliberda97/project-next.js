import Link from 'next/link';

const AboutPage = () => {
  return (<div>
    <h1>AboutPage</h1>
    <Link href="/">
    <button className='bg-orange-400 p-2 rounded-lg'>
      Back Home</button>  
    </Link>
    </div>
  )
}

export default AboutPage

